import React from "react";
import aboutBg from '../../images/about-img.jpg';

const About = () => {
  return (
    <div className="p-12">
        <div class="hero ">
      <div class="hero-content flex-col lg:flex-row">
        <div className="w-2/4">
        <img
          src={aboutBg}
          class="w-full rounded-lg shadow-2xl"
        alt=""/>
        </div>
        <div className="w-2/4 px-5">
          <h1 class="text-5xl font-bold">We Are <span className="text-primary">Move Home</span></h1>
          <p class="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
          </p>
          <button class="btn btn-primary text-white">Read More</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
