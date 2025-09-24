import React from "react";
import ServiceHero from "../pages/service/ServiceHero";
import CallBanner from "../pages/home/CallBanner";
import Banner from "../pages/service/Banner";
import Info from "../pages/service/Info";

const ServiceLayOut = () => {
  return (
    <div>
      <ServiceHero />
      <Banner />
      <Info />
      <CallBanner />
    </div>
  );
};

export default ServiceLayOut;
