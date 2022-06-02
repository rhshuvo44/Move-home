import React from "react";
import About from "./About";
import Banner from "./Banner";
import CallContact from "./CallContact";
import ContactUS from "./ContactUS";
import News from "./News";
import Question from "./Question";
import Service from "./Service";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <CallContact />
      <Question />
      <News />
      <ContactUS />
    </div>
  );
};

export default Home;
