import React, { Component } from "react";

export class PricingInfoCard1 extends Component {
  render() {
    return (
      <div id="pricing_info_card1">
        <div className="pricing_info_card">
          <div className="pricing_info_card_rectangle">
            <span className="pricing_info_rectangle_text">MP3 LICENSE</span>
          </div>
          <div className="main">
            <div className="text-center">
              <div className="price">$9.99</div>
            </div>
            <div className="text-muted text-uppercase sub-text">
              non exclusive
            </div>
            <ul className='px-4 py-1'>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">MP3</div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">Untagged</div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">Distribute 5,000 Units</div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">500,000 Monetized <br /> Audio Streams</div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">1,000,000 Monetize <br /> Video Streams</div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">Use For a Single <br/> Commercial Release </div>
              </li>
              <li className="border-bottom">
                <div className="text-muted sub-text my-2">--Must Credit-- <br /> "Hamam" </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingInfoCard1;
