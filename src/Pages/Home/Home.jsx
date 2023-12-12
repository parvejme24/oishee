import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import AboutMe from "../../components/Home/AboutMe/AboutMe";
import Education from "../../components/Education/Education";
import GoProbono from "../../components/GoProbono/GoProbono";
import Projects from "../../components/Home/Projects/Projects";
import ContacMe from "../../components/Home/ContactMe/ContacMe";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Education />
      <GoProbono />
      <Projects />
      <ContacMe />
    </div>
  );
};

export default Home;
