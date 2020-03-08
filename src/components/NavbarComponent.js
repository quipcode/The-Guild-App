// TODO: Activate caret active animation
import React, { Component } from 'react';
import {TweenLite, Bounce, Elastic} from 'gsap';
import{Navbar, Nav, NavDropdown,Form, FormControl, Button, MenuItem} from 'react-bootstrap';

class NavbarReactBootstrap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jsxData: [],
            submenu: [],
         
        };
    }

   

    render() {
        return (
            <React.Fragment>
                <Navbar className="navbar navbar-dark bg-dark navbar-expand-sm" expand="sm">
                    <Navbar.Brand href="/home">
                        
                            <a className="navbar-brand" href="/home">
                                <img src="/assets/images/transparent_shield.png" width="30" height="30" alt="logo" />
                                {/* instead of <img src={"/images/resto.png"} /> you need to use <img src={require('/images/image-name.png')} /> */}
                                {/* <img src={require("images/transparent_shield.png")} width="30" height="30" alt="logo" /> */}
                                {/* <img src="http://localhost:3001/images/transparent_shield.png" width="30" height="30" alt="logo" /> */}
                                
                                <span> The Guild App</span>
                            </a>
                        
                        
                            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            
                            
                            <NavDropdown eventKey={1}
                                title={
                                    <div className="pull-left">
                                        <img className="thumbnail-image"
                                            src="/assets/images/icons8-user-shield-80.png"
                                            alt="user pic"
                                            width="40" height="40" className="rounded-circle"
                                        /><span>Self</span>
                                    </div>
                                }
                                id="basic-nav-dropdown" 
                            >
                                <NavDropdown.Item href="/myprofile">My Profile Page</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown eventKey={1}
                                title={
                                    <div className="pull-left">
                                        <img className="thumbnail-image"
                                            src="/assets/images/icons8-web-shield-80.png"
                                            alt="user pic"
                                            width="40" height="40" class="rounded-circle"
                                        /><span>Guild</span>
                                    </div>
                                }
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/myguilds">My Guilds</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown eventKey={1}
                                title={
                                    <div className="pull-left">
                                        <img className="thumbnail-image"
                                            src="/assets/images/shielded_message.png"
                                            alt="user pic"
                                            width="40" height="40" class="rounded-circle"
                                        /><span>Messages</span>
                                    </div>
                                }
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/messagingcenter">Messaging Center</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown eventKey={1}
                                title={
                                    <div className="pull-left">
                                        <img className="thumbnail-image"
                                            src="/assets/images/icons8-security-configuration-100.png"
                                            alt="user pic"
                                            width="40" height="40" class="rounded-circle"
                                        /><span>Admin</span>
                                    </div>
                                }
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/userdirectory">User Directory</NavDropdown.Item>
                                <NavDropdown.Item href="/userprofile">User Profile by Id</NavDropdown.Item>
                                <NavDropdown.Item href="/guilddirectory">Guild Directory</NavDropdown.Item>
                                <NavDropdown.Item href="/guildprofile">Guild Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

// Navigation menu builder



export default NavbarReactBootstrap;

// ReactDOM.render(
//     <CpcNavigation menu={menu} />,
//     document.querySelector('#app')
// );
