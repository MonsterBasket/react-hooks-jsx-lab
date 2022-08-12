import React from "react";
import { image } from "../data/data";
/* eslint no-undef: "off"*/
function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Edison style</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
