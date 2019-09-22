import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Player } from 'video-react';


class Home extends Component {
	constructor() {
		super()
		this.state = {
			playVideo: false,
			dropdownOpen: false
		}
	}

	showPlay = () => {
		this.setState({
			playVideo: true
		})
	}
	hidePlay = () => {
		this.setState({
			playVideo: false
		})
	}

	toggle = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
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
								<li className='list btn btn-light'>Pages</li>
								<li className='list btn btn-light'>Work</li>
								<li className='list btn btn-light'>Blog</li>
								<li className='list btn btn-light'>Docs</li>
								<li
									onClick={() => this.props.onRouteChange('signin')}
									className='list btn btn-primary pointer'>Sign Out</li>
							</ul>
						</div>
					</div>
					{/* end of bodytop */}
					{/* start of bodymiddle */}
					{this.state.playVideo ?
						<div className='mt6 d-flex justify-content-between'>
							<div className='white ml6 w-50'>
								<h1>Start your business with <b>Space.</b></h1>
								<p>Build a beautiful modern website with flexible Bootstrap components built from scratch.</p>
								<div>
									<button className='btn btn-primary'>Learn more</button>
									<button
										className='btn btn-light ml1 video'
										onClick={this.hidePlay}
									>Hide video
                            </button>
								</div>
								<div>
									<Player
										playsInline
										poster="/assets/poster.png"
										src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
									/>
								</div>
							</div>
							{/* <div className='image'><img className='br2 shadow-5 w-70' src={developer}/></div> */}
						</div> :
						<div className='mt6 d-flex justify-content-between'>
							<div className='white ml6 w-50'>
								<h1>Start your business with <b>Space.</b></h1>
								<p>Build a beautiful modern website with flexible Bootstrap components built from scratch.</p>
								<div>
									<button
										onClick={() => this.props.onRouteChange('face')}
										className='btn btn-primary'>Detect Face</button>
									<button
										className='btn btn-light ml1 video'
										onClick={this.showPlay}
									>Play video
						</button>
								</div>
							</div>
							{/* <div className='image'><img className='br2 shadow-5 w-70' src={developer}/></div> */}
						</div>
					}
					{/* end of bodymiddle */}
					{/* end of body */}
				</div>


				{/* end of container */}
			</div>

		);
	}
}

export default Home;
