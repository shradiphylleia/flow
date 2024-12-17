import React from "react";
import Title from "./Title";
import "./About.css";

function About() {
  return (
    <>
      <div className="cntr">
        <div className="text">
          <Title className="intro" header="hi there,"></Title>
          <p className="desc">
            Acupressure is an ancient healing technique that uses gentle
            pressure on specific points of the body to relieve stress and
            improve circulation.To enhance this experience,I integrated computer
            vision technology to identify and guide you to the right pressure
            points effectively.This can help ensure accuracy, personalization,
            and better results for your wellness journey.
          </p>
        </div>
        <div className="heartGraphic">
          <img src="src/assets/heart.png" alt="heart graphics" />
        </div>
      </div>

      <h3>developed by <a href="https://github.com/shradiphylleia"> shraddha</a> during Mindfulness hacks</h3>
    </>
  );
}

export default About;
