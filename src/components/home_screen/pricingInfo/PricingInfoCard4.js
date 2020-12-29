import React, { Component } from "react";

export class PricingInfoCard4 extends Component {
  render() {
    return (
      <div id="pricing_info_card4">
        <div className="pricing_info_card">
          <div className="pricing_info_card_rectangle">
            {" "}
            <span className="pricing_info_rectangle_text">
              {" "}
              PREMIUM TRACKOUT{" "}
            </span>{" "}
          </div>
          <div className="main">
            <div className="text-center">
              <div className="price">$49.99</div>
            </div>
            <div className="text-muted text-uppercase sub-text">
              non exclusive
            </div>
            <ul className="px-4 py-1">
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">MP3/WAV/TRACKOUTS</div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">Untagged</div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">
                  Distribute 100,000 Units
                </div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">
                  15,000,000 Monetized <br /> Audio Streams
                </div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">
                  10,000,000 Monetize <br /> Video Streams
                </div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">
                  Use For a Single <br /> Commercial Release{" "}
                </div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">
                  --Must Credit-- <br /> "Hamam"{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingInfoCard4;
