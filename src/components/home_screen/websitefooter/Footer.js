import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div id="footer_entire">
        <div id="footer_line"></div>
        <div id="footer_box">
          <div className="container d-flex flex-wrap justify-content-between align-items-center">
            <div className="text-muted">
              {" "}
              <span> Copyright 2020</span> <strong> © prodbyhamam </strong>{" "}
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
