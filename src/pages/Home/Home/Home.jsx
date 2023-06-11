import React from "react";
import { Helmet } from "react-helmet";
import useDarkLight from "../../../hooks/useDarkLight";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  const [isDarkMode] = useDarkLight();
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Helmet>
        <title>Home | LanguageGuide</title>
        <body className={isDarkMode ? "dark" : ""} />
      </Helmet>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <Contact />
    </div>
  );
};

export default Home;
