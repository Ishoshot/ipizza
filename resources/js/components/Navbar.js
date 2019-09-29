import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ReactDOM from 'react-dom';


class NavbarComponent extends Component{
    render(){ 
        return (
            <div>

                <Navbar collapseOnSelect expand="lg" className="tw-bg-black py-3" sticky="top" variant="dark">
                    <Navbar.Brand href="#home" className="font-weight-bold xl:tw-ml-20">
                      <img
                        alt=""
                        src="/media/logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-center"
                      />
                      {' iPizza'}
                    </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Link className="tw-mr-5 xl:tw-ml-5" href="/">Home</Nav.Link>
                      <Nav.Link className="tw-mr-5 xl:tw-ml-5" href="#catalogue">Catalogue</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link className="tw-mr-5 xl:tw-ml-5" href="#schedule">Schedule</Nav.Link>
                      <Nav.Link className="tw-mr-20 xl:tw-ml-5" href="#contact">Contact</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            
            </div>
        );
    }   
}

export default NavbarComponent;

if (document.getElementById('navbar')) {
    ReactDOM.render(<NavbarComponent />, document.getElementById('navbar'));
}
