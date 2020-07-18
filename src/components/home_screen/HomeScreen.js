import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import MotionPicture from './MotionPicture';
import BeatsCatalogue from './beatsCatalogue/BeatsCatalogue';
import BeatsCatalogueTitle from './beatsCatalogue/BeatsCatalogueTitle';
import PricingInfoTitle from './pricingInfo/PricingInfoTitle';

export class HomeScreen extends Component {

    render() {

        return (
            <div id="home_screen">

              {/* LANDING PAGE */}
              <Navbar />
              <MotionPicture />

              {/* BEATS CATALOGUE */}
              <div id="beats_catalogue_entire"> 
              <BeatsCatalogueTitle/>
                {/* <BeatsCatalogue /> */}
              </div>
              {/* PRICING INFO */}
              {/* <div> */}
                {/* <PricingInfoTitle/> */}
              {/* </div> */}
               {/* CONTACT */}

            </div>
        );
    }
}

export default HomeScreen