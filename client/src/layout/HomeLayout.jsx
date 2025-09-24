import React from "react";
import Hero from "../pages/home/Hero";
import About from "../pages/home/About";
import Roles from "../pages/home/Roles";
import Banner from "../pages/home/Banner";
import Ecommerce from "../pages/home/Ecommerce";
import CallBanner from "../pages/home/CallBanner";
import PathArrow from "../components/PathArrow";
const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <About />
      <Roles />
      <Banner />
      <PathArrow />
      <Ecommerce />
      <CallBanner />
    </div>
  );
};

export default HomeLayout;
