import React, { Component } from 'react';
import './signup.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Signup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      dropdownOpen: false
    }
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onSubmitSignup = () => {
    fetch(' https://evening-falls-75229.herokuapp.com/signup', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    }).then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }


  render() {
    return (
      //start of container
      <div className='container-fluid'>
        {/* start of header */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <a className="navbar-brand" href="#">Overview</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link btn btn-primary" href="#">Add to Cart $39.99<span className="sr-only">(current)</span></a>
              </li>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret className='btn btn-light'>
                  Standard License
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Documentation License</DropdownItem>
                  <DropdownItem>Open Content License</DropdownItem>
                  <DropdownItem>Open Publication License</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem disabled>Database License</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        {/* end of header */}
        {/* start of body */}
        <div className='body'>
          {/* start of bodytop */}
          <div className='bodytop'>
            <div className='bodytopleft'>
              <span className='fontawe rounded-circle'><i className="fa fa-plane"></i></span>
              <p className='space'>Space</p>
            </div>
            <div>
              <ul className='lists'>
                {/* start of home */}
                <ButtonDropdown direction="down" isOpen={this.state.btnDropdown} toggle={() => { this.setState({ btnDropdown: !this.state.btnDropdown }); }}>
                  <DropdownToggle caret className='btn btn-light'>
                    Home
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>About us</DropdownItem>
                    <DropdownItem>Contact us</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                {/* end of home */}
                <li className='list btn btn-light lis'>Pages</li>
                <li className='list btn btn-light lis'>Work</li>
                <li className='list btn btn-light lis'>Blog</li>
                <li className='list btn btn-light'>Docs</li>
                <li
                  onClick={() => this.props.onRouteChange('signin')}
                  className='list btn btn-primary pointer'>Signin</li>
              </ul>
            </div>
          </div>
          {/* end of bodytop */}
          {/* start of bodymiddle */}
          <div className='bodymiddle'>
            {/* start of miidlenote */}
            <div className='middlenote white'>
              <p className='middlenotep'>JOIN THE CHANGE</p>
              <h1 className='middlenoteh'>Space service that moves work forward</h1>
            </div>
            {/* end of middlenote */}
            {/* start of signup */}
            <article className="br3 ba bg-white b--dark-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 dark-80">
                <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw4 ph0 mh0">Get started for free</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-dark w-100"
                        placeholder='Enter your username'
                        onChange={this.onNameChange}
                        type="name"
                        name="name"
                        id="name"
                      />
                    </div>
                    <div className="mt3 input">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-dark w-100"
                        placeholder='Enter your email-address'
                        onChange={this.onEmailChange}
                        type="email"
                        name="email-address"
                        id="email-address"
                      />
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                      <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-dark w-100"
                        placeholder='Enter your password'
                        onChange={this.onPasswordChange}
                        type="password"
                        name="password"
                        id="password"
                      />
                    </div>
                  </fieldset>
                  <div className="">
                    <input
                      className="b ph3 pv2 input-reset ba btn btn-success grow pointer f6 dib"
                      onClick={this.onSubmitSignup}
                      type="submit"
                      value="Get Started" />
                  </div>
                </div>
              </main>
            </article>
            {/* end of signup */}
            {/* end of bodymiddle */}
          </div>

          {/* end of body */}
        </div>
      </div>
      /* end of container */

    );
  }
}

export default Signup;
