import React, { Component } from "react";
// import {Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import {FaSoundcloud, FaTwitter, FaYoutube, FaInstagram, FaSpotify } from 'react-icons/fa';

class Navbar extends Component {
  state = {};

  home_scrollFunction() {
    let elmntToView = document.getElementById("home_screen");
    if (elmntToView == null) return;
    else elmntToView.scrollIntoView({ behavior: "smooth" });
  }

  catalog_scrollFunction() {
    let elmntToView = document.getElementById("catalog_title_container");
    if (elmntToView == null) return;
    else elmntToView.scrollIntoView({ behavior: "smooth" });
  }

  pricing_scrollFunction() {
    let elmntToView = document.getElementById("pricing_title_container");
    if (elmntToView == null) return;
    else elmntToView.scrollIntoView({ behavior: "smooth" });
  }

  contact_scrollFunction() {
    let elmntToView = document.getElementById("contact_title_container");
    if (elmntToView == null) return;
    else elmntToView.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <>
        <div className="social p-0">
          <div className="social container">
            <span>
              CURRENT SALE: BUY 1 GET 1 FREE! ADD 2 OF ANY LICENSE TYPE TO YOUR
              CART TO APPLY DISCOUNT!
            </span>
            <div>
              <a href='https://www.google.com' ><FaSoundcloud className='mx-1 iconsSocial' /></a>
              <a href='https://www.google.com' ><FaTwitter className='mx-1 iconsSocial' /></a>
              <a href='https://www.google.com' ><FaYoutube className='mx-1 iconsSocial' /></a>
              <a href='https://www.google.com' ><FaInstagram className='mx-1 iconsSocial' /></a>
              <a href='https://www.google.com' ><FaSpotify className='mx-1 iconsSocial' /></a>
            </div>
          </div>
        </div>
        <header id="navbar_box">
          <div className="container d-flex justify-conetnt-start align-items-center flex-row">
            <img src="/wp2487509_edited.webp" style={{ width: "63px" }} />
            <button
              type="button"
              onClick={this.home_scrollFunction}
              id="home_button"
              className="navbar_button"
            >
              {" "}
              HOME{" "}
            </button>
            <button
              type="button"
              onClick={this.catalog_scrollFunction}
              id="catalog_button"
              className="navbar_button"
            >
              {" "}
              BEAT CATALOG{" "}
            </button>
            {/* <button type="button" id="kits_button" className="navbar_button" > DRUM KITS </button> */}
            <button
              type="button"
              onClick={this.pricing_scrollFunction}
              id="pricing_button"
              className="navbar_button"
            >
              {" "}
              LICENSE INFO{" "}
            </button>
            <button
              type="button"
              onClick={this.contact_scrollFunction}
              id="contact_button"
              className="navbar_button"
            >
              {" "}
              CONTACT{" "}
            </button>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;
