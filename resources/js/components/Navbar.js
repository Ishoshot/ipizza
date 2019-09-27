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
                      <Nav.Link className="tw-mr-5 xl:tw-ml-5" href="#features">Features</Nav.Link>
                      <Nav.Link className="tw-mr-5 xl:tw-ml-5" href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link className="tw-mr-5 xl:tw-ml-5" href="#deets">More deets</Nav.Link>
                      <Nav.Link className="tw-mr-20 xl:tw-ml-5" eventKey={2} href="#memes">
                        Dank memes
                      </Nav.Link>
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
