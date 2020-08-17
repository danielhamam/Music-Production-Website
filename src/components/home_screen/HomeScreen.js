import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import MotionPicture from './MotionPicture';
import BeatsCatalogue from './beatsCatalogue/BeatsCatalogue';
import BeatsCatalogueTitle from './beatsCatalogue/BeatsCatalogueTitle';
import PricingInfoTitle from './pricingInfo/PricingInfoTitle';
import PricingInfoCard1 from './pricingInfo/PricingInfoCard1';
import PricingInfoCard2 from './pricingInfo/PricingInfoCard2';
import PricingInfoCard3 from './pricingInfo/PricingInfoCard3';
import PricingInfoCard4 from './pricingInfo/PricingInfoCard4';
import ContactTitle from './contact/ContactTitle';
import ContactInfo from './contact/ContactInfo';
import Footer from './websitefooter/Footer';



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
                <BeatsCatalogue />
              </div>
              {/* PRICING INFO */}
              <div id="pricing_entire">
                <PricingInfoTitle/>
                <div id="pricing_info_cards_container">
                  <PricingInfoCard1/>
                  <PricingInfoCard2/>
                  <PricingInfoCard3/>
                  <PricingInfoCard4/>
                </div> 
              </div>
               {/* CONTACT */}
              <div id="contact_entire">
               <ContactTitle/>
               <ContactInfo/>
              </div>
              <Footer/>
            </div>
        );
    }
}

export default HomeScreen