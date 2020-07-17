import React, { Component } from 'react';
// import {Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

class Navbar extends Component {

  state = {
  }

    render() {

        return (
            
            <div id="navbar_box">
                <button type="button" id="home_button" className="navbar_button"> HOME </button>
                <button type="button" id="catalog_button" className="navbar_button"> BEAT CATALOG </button>
                <button type="button" id= "license_button" className="navbar_button"> LICENSE INFO </button>
                <button type="button" id="contact_button" className="navbar_button"> CONTACT </button>
			</div>

          );
    }
}

export default Navbar