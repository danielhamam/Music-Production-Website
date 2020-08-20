import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div id="footer_entire">
        <div id="footer_line"></div>
        <div id="footer_box" style={{background: "#4f4f4f"}}>
          <div className="container d-flex flex-wrap justify-content-between align-items-center">
            <div style={{color: "#BEBCC2"}}>
              {" "}
              <span > Copyright 2020</span> <strong> © prodbyhamam </strong>{" "}
            </div>
            <div>
              <img
                src="/visa-mastercard-paypal-1.webp"
                alt=""
                className="footer_visa"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
