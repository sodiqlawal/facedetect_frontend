import React, { Component } from 'react';
import Signup from './Signup';
import Signin from './signin';
import Home from './home';
import FaceRecognition from './FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'afd803ffde89498e8c72bd3b2044cf08'
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signout',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      left_col: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
    // return data.outputs[0].data.regions.map(face => {
    //   const clarifaiFace = face.region_info.bounding_box;
    //   return {
    //     left_col: clarifaiFace.left_col * width,
    //     topRow: clarifaiFace.top_row * height,
    //     rightCol: width - (clarifaiFace.right_col * width),
    //     bottomRow: height - (clarifaiFace.bottom_row * height)
    //   }
    // })
  }


  displayFaceBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => {
        // console.log(response);
        if (response) {
          fetch(' https://evening-falls-75229.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(
                Object.assign(this.state.user, { entries: count })
              )
            })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log('err'))
  }




  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  render() {
    const { route } = this.state

    return (
      <div>
        {route === 'signout' ?
          <Signup onRouteChange={this.onRouteChange} loadUser={this.loadUser} /> :
          (route === 'home' ?
            <Home onRouteChange={this.onRouteChange} /> :
            (route === 'face' ?
              <FaceRecognition
                onRouteChange={this.onRouteChange}
                box={this.state.box}
                imageUrl={this.state.imageUrl}
                onInputChange={this.onInputChange}
                onSubmit={this.onSubmit}
                entries={this.state.user.entries}
                name={this.state.user.name}
              />
              :
              <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            )
          )
        }
      </div>

    );
  }
}


export default App;
