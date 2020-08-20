import React, { Component } from 'react';
import motionGif from '../../images/wallpaper.gif';
import motionGif2 from '../../images/newimage.gif';
import motionGif4 from '../../images/newimage_1.gif';
import motionPic from '../../images/targetGif.gif';

import grayBar from '../../images/gray_bar.png';
import catalog_scrollFunction from "../navbar/Navbar.js"

export class MotionPicture extends Component {

  catalog_scrollFunction() {
    let elmntToView = document.getElementById("catalog_title_container");
    if (elmntToView == null) return;
    else elmntToView.scrollIntoView({behavior: "smooth"}); 
    }


    render() {

        return (
    
          <div id="motion_container">
            {/* <img src={motionGif4} id="motion_gif" alt="Motion gif" /> */}
            <div id="motion_text">

              {/* FIRST PHRASE */}
              <div id="motion_text1"> 
              CURRENT SALE 
              </div> 
              <img src={grayBar} id="motion_graybar1"/>
              {/* SECOND PHRASE */}
              <div id="motion_break"> </div> 
              <div id="motion_text2"> BUY 1 GET 1 FREE </div>
              <img src={grayBar} id="motion_graybar2"/> 
             

              {/* THIRD PHRASE */}
              <div id="motion_text3"> ADD TWO OF ANY LICENSE TYPE TO YOUR CART TO APPLY THE DISCOUNT! </div> 
        

              {/* VIEW CATALOG BUTTON */}
              <button onClick={this.catalog_scrollFunction} id="motion_view_catalog"> VIEW CATALOG </button>

            </div>
          </div>
        );
    }
}

export default MotionPicture