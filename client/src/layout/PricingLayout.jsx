import React from "react";
import PricingHero from "../pages/pricing/PricingHero";
import CallBanner from "../pages/home/CallBanner";
import Plans from "../pages/pricing/Plans";

const PricingLayout = () => {
  return (
    <div>
      <PricingHero />
      <Plans />
      <CallBanner />
    </div>
  );
};

export default PricingLayout;
