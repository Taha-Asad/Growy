import React from "react";
import SuccessHero from "../pages/success/SuccessHero";
import Client from "../pages/success/Client";
import Testimonials from "../pages/success/Testimonials";

const SuccessLayout = () => {
  return (
    <div>
      <SuccessHero />
      <Client />
      <Testimonials />
    </div>
  );
};

export default SuccessLayout;
