import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | LanguageGuide</title>
      </Helmet>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <Contact />
    </div>
  );
};

export default Home;
