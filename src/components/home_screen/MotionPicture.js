import React, { Component } from 'react';
import motionGif from '../../images/wallpaper.gif';
import motionPic from '../../images/targetGif.gif';
import grayBar from '../../images/gray_bar.png';
// import 'react-slideshow-image/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export class MotionPicture extends Component {

    render() {

        return (
    
          <div id="motion_container">
            <img src={motionGif} id="motion_box" alt="Motion gif" />
            <div id="motion_text">

              {/* FIRST PHRASE */}
              <span id="motion_text1"> 
              CURRENT SALE 
              <br />
              <img src={grayBar} id="motion_graybar1"/>
              </span> 

              {/* SECOND PHRASE */}
              <div id="motion_break"> </div> 
              <span id="motion_text2"> BUY 1 GET 1 FREE </span> <br /> 
              <img src={grayBar} id="motion_graybar2"/> 
              <br />

              {/* THIRD PHRASE */}
              <span id="motion_text3"> ADD TWO OF ANY LICENSE TYPE TO YOUR CART TO APPLY THE DISCOUNT! </span> 
              <br />

              {/* VIEW CATALOG BUTTON */}
              <button id="motion_view_catalog"> VIEW CATALOG </button>

            </div>
          </div>
        );
    }
}

export default MotionPicture