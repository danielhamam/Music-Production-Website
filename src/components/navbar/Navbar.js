import React, { Component } from 'react';
// import {Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

class Navbar extends Component {

  state = {
  }
  
  home_scrollFunction() {
	let elmntToView = document.getElementById("home_screen");
	if (elmntToView == null) return;
	else elmntToView.scrollIntoView({behavior: "smooth"}); 
  }

  catalog_scrollFunction() {
	let elmntToView = document.getElementById("catalog_title_container");
	if (elmntToView == null) return;
	else elmntToView.scrollIntoView({behavior: "smooth"}); 
  }

  pricing_scrollFunction() {
	let elmntToView = document.getElementById("pricing_title_container");
	if (elmntToView == null) return;
	else elmntToView.scrollIntoView({behavior: "smooth"}); 
  }

  contact_scrollFunction() {
	let elmntToView = document.getElementById("contact_title_container");
	if (elmntToView == null) return;
	else elmntToView.scrollIntoView({behavior: "smooth"}); 
  }

    render() {

        return (
            
            <div id="navbar_box">
				<div id="navbar_buttons_container"> 
                	<button type="button" onClick={this.home_scrollFunction} id="home_button" className="navbar_button"> HOME </button>
                	<button type="button" onClick={this.catalog_scrollFunction} id="catalog_button" className="navbar_button"> BEAT CATALOG </button>
					<button type="button" id="kits_button" className="navbar_button" > DRUM KITS </button>
                	<button type="button" onClick={this.pricing_scrollFunction} id= "pricing_button" className="navbar_button"> LICENSE INFO </button>
                	<button type="button" onClick={this.contact_scrollFunction} id="contact_button" className="navbar_button"> CONTACT </button>
				</div>
			</div>

          );
    }
}

export default Navbar