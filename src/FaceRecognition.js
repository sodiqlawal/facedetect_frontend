import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './FaceRecognition.css';


class FaceRecognition extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const { imageUrl, box, name, entries, onInputChange, onSubmit } = this.props;
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
                    <div className='bodymiddletop'>
                        <div>
                            <div className='white f3 tc'>
                                {`${name}, your current entry count is...`}
                            </div>
                            <div className='white f2 tc'>
                                {entries}
                            </div>
                        </div>
                        <div>
                            <p className='f3 tc silver mt3'>
                                {'This Magic brain will detect faces in your pictures. Give it a try'}
                            </p>
                            <div className='center'>
                                <div className='form center pa4 br3 shadow-5'>
                                    <input className='f4 pa2 w-70 center' type='tex' placeholder='Input the link to the image you want to detect' onChange={onInputChange} />
                                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='center ma'>
                        <div className='absolute mt2'>
                            <img alt='' id='inputimage' src={imageUrl} width='500px' height='auto' />
                            <div className='bounding-box'
                                style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.left_col }}>
                            </div>
                        </div>
                    </div>
                    {/* end of bodymiddle */}
                    {/* end of body */}
                </div>


                {/* end of container */}
            </div>

        );
    }
}



export default FaceRecognition;

