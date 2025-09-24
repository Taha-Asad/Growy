import React, { useState } from "react";
import CallBanner from "../pages/home/CallBanner";
import JobsHero from "../pages/jobs/JobsHero";
import JobButtons from "../pages/jobs/JobButtons";
import Banner from "../pages/home/Banner";
import Jobs from "../pages/jobs/Jobs";
import PathArrow from "../components/PathArrow";
import CTABanner from "../pages/jobs/CTABanner";

const JobsLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div>
      <JobsHero />
      <JobButtons
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Banner />
      <Jobs selectedCategory={selectedCategory} />
      <PathArrow />
      <CTABanner />
    </div>
  );
};

export default JobsLayout;
