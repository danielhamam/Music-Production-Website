import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import MotionPicture from "./MotionPicture";
import BeatsCatalogue from "./beatsCatalogue/BeatsCatalogue";
import BeatsCatalogueTitle from "./beatsCatalogue/BeatsCatalogueTitle";
import PricingInfoTitle from "./pricingInfo/PricingInfoTitle";
import PricingInfoCard1 from "./pricingInfo/PricingInfoCard1";
import PricingInfoCard2 from "./pricingInfo/PricingInfoCard2";
import PricingInfoCard3 from "./pricingInfo/PricingInfoCard3";
import PricingInfoCard4 from "./pricingInfo/PricingInfoCard4";
import ContactTitle from "./contact/ContactTitle";
import ContactInfo from "./contact/ContactInfo";
import Footer from "./websitefooter/Footer";
import { FiChevronUp } from "react-icons/fi";
import $ from "jquery";

export class HomeScreen extends Component {
  componentDidMount() {
    $("#moveToTop").each(function () {
      $(this).click(function () {
        $("html,body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    });
    $(document).ready(function () {
      var scrollLink = $(".scroll");

      // Smooth scrolling
      scrollLink.click(function (e) {
        e.preventDefault();
        $("body,html").animate(
          {
            scrollTop: $(this.hash).offset().top,
          },
          1000
        );
      });

      // Active link switching
      $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {
          var sectionOffset = $(this.hash).offset().top - 70;

          if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass("active");
            $(this).parent().siblings().removeClass("active");
          }
        });
      });
    });
  }
  render() {
    return (
      <div id="home_screen">
        {/* LANDING PAGE */}
        <Navbar />
        <MotionPicture />

        {/* BEATS CATALOGUE */}
        <div id="beats_catalogue_entire">
          <BeatsCatalogueTitle />
          <BeatsCatalogue />
        </div>
        {/* PRICING INFO */}
        <div id="pricing_entire">
          <PricingInfoTitle />
          <div id="pricing_info_cards_container">
            <PricingInfoCard1 />
            <PricingInfoCard2 />
            <PricingInfoCard3 />
            <PricingInfoCard4 />
          </div>
        </div>
        {/* CONTACT */}
        <div id="contact_entire">
          <ContactTitle />
          <ContactInfo />
        </div>
        <Footer />
        <div className="moveToTop" id="moveToTop">
          <FiChevronUp />
        </div>
        <div className="sideMenuDots d-none d-md-none">
          <a href="#beats_catalogue_entire" className="dots scroll"></a>
          <a href="#pricing_title_container" className="dots scroll"></a>
          <a href="#contact_entire" className="dots scroll"></a>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
