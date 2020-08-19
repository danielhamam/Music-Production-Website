import React, { Component } from "react";
// import {Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import {
  FaSoundcloud,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
class Navbar extends Component {
  state = {
    open: false,
  };

  _handelOpen = () => {
    this.setState({ open: !this.state.open });
  };

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
        <div style={{ background: "#2f2e2e" }}>
          <div className="social p-0" style={{margin: "0px 85px", height: 35 }}>
            <div className="social container">
              <span style={{fontSize: 11}}>
                CURRENT SALE: BUY 1 GET 1 FREE! ADD 2 OF ANY LICENSE TYPE TO
                YOUR CART TO APPLY DISCOUNT!
              </span>
              <div className="d-none d-md-block">
                <a href="https://www.google.com" >
                  <FaSoundcloud className="mx-1 iconsSocial" style={{fontSize: 16}}/>
                </a>
                <a href="https://www.google.com" >
                  <FaTwitter className="mx-1 iconsSocial" style={{fontSize: 16}}/>
                </a>
                <a href="https://www.google.com" >
                  <FaYoutube className="mx-1 iconsSocial" style={{fontSize: 16}}/>
                </a>
                <a href="https://www.google.com" >
                  <FaInstagram className="mx-1 iconsSocial" style={{fontSize: 16}}/>
                </a>
                <a href="https://www.google.com" >
                  <FaSpotify className="mx-1 iconsSocial" style={{fontSize: 16}}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <header id="navbar_box" style={{padding: 45}}>
          <div className="container d-flex justify-conetnt-start align-items-center flex-row">
            <div className="d-flex d-md-none justify-content-between align-items-center">
              <img
                src="https://static.wixstatic.com/media/2de498_246231f70b8d47ff8dc8a729352d828c~mv2.png/v1/fill/w_126,h_80,al_c,q_85,usm_0.66_1.00_0.01/wp2487509_edited.webp"
                style={{ width: "60px", height: "40px" }}
                className="d-block d-md-none"
              />
              <div
                className="bar_menu"
                onClick={() => {
                  this._handelOpen();
                }}
              >
                {this.state.open ? <FiX /> : <FiMenu />}
              </div>
              <div className={`sideMenu_wrapper ${this.state.open && "open"} `}>
                <div
                  className=" d-flex flex-column justify-content-center align-items-center "
                  style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: "99",
                    paddingTop: "30px",
                  }}
                >
                  <button
                    type="button"
                    onClick={this.home_scrollFunction}
                    id="home_button"
                    className="navbar_button"
                    style={{ width: "175px", height: 27, margin: "10px 0" }}
                  >
                    {" "}
                    HOME{" "}
                  </button>
                  <button
                    type="button"
                    onClick={this.catalog_scrollFunction}
                    id="catalog_button"
                    className="navbar_button"
                    style={{ width: "175px", height: 27, margin: "10px 0" }}
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
                    style={{ width: "175px", height: 27, margin: "10px 0" }}
                  >
                    {" "}
                    LICENSE INFO{" "}
                  </button>
                  <button
                    type="button"
                    onClick={this.contact_scrollFunction}
                    id="contact_button"
                    className="navbar_button"
                    style={{ width: "175px", height: 27, margin: "10px 0" }}
                  >
                    {" "}
                    CONTACT{" "}
                  </button>
                  <div style={{ marginTop: "50vh" }}>
                    <div className="">
                      <a href="https://www.google.com">
                        <FaSoundcloud className="mx-1 iconsSocial" />
                      </a>
                      <a href="https://www.google.com">
                        <FaTwitter className="mx-1 iconsSocial" />
                      </a>
                      <a href="https://www.google.com">
                        <FaYoutube className="mx-1 iconsSocial" />
                      </a>
                      <a href="https://www.google.com">
                        <FaInstagram className="mx-1 iconsSocial" />
                      </a>
                      <a href="https://www.google.com">
                        <FaSpotify className="mx-1 iconsSocial" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg"></div>
              </div>
            </div>

            <div className="d-md-flex d-none justify-content-start align-items-center">
              <img
                src="/wp2487509_edited.webp"
                style={{ width: "63px" }}
                className="d-none d-md-block"
              />
              <div className="d-none d-md-flex justify-content-start align-items-start ">
                <button
                  type="button"
                  onClick={this.home_scrollFunction}
                  id="home_button"
                  className="navbar_button"
                  style={{padding: 20}}
                >
                  {" "}
                  HOME{" "}
                </button>
                <button
                  type="button"
                  onClick={this.catalog_scrollFunction}
                  id="catalog_button"
                  className="navbar_button"
                  style={{padding: 20}}
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
                  style={{padding: 20}}
                >
                  {" "}
                  LICENSE INFO{" "}
                </button>
                <button
                  type="button"
                  onClick={this.contact_scrollFunction}
                  id="contact_button"
                  className="navbar_button"
                  style={{padding: 20}}
                >
                  {" "}
                  CONTACT{" "}
                </button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;
