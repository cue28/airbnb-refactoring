import React from "react";

import MainBanner from "../components/home/mainbanner/MainBanner";
import TravelDestination from "../components/home/travelDestination/TravelDestination";
import TravelStay from "../components/home/travelStay/TravelStay";
import TravelIdea from "../components/home/travelIdea/TravelIdea";
import TravelExperience from "../components/home/travelExprience/TravelExperience";
import TravelHosting from "../components/home/travelHosting/TravelHosting";
import Footer from "../components/common/footer/Footer";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <MainBanner />
      <TravelDestination />
      <TravelStay />
      <TravelIdea />
      <TravelExperience />
      <TravelHosting />
      <Footer />
    </div>
  );
}

export default Home;
