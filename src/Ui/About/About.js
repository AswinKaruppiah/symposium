import React from "react";
import promo from "./lv_0_20230325004541.mp4";
import "./About.css";
import dpt from "./20230330_190331_0000.png";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function About() {
  return (
    <div className="about">
      <div className="abt-codefest">
        <div className="event-abt">
          <h1>Code Fest</h1>
          <p>
            CodeFest Is a National level Technical Symposium To ShowCase Their
            Technical Expertise,It Is Wholly Organised And Co-ordinatent By Our
            Student And Support By The management And Staff Of Computer Science
            And Engineering
          </p>
        </div>
        <div>
          <Video
            // autoPlay
            loop
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
          >
            <source src={promo} type="video/webm" />
          </Video>
        </div>
      </div>
      <hr />
      <div className="abt-dept">
        <div className="img-dept">
          <img src={dpt} alt="not" />
        </div>
        <div>
          <div>
            <h1>ABOUT DEPARTMENT</h1>
          </div>

          <br />
          <p>
            The department of Computer Science and Engineering was established
            in the year 2001.The Department also has Post Graduate courses on
            Computer Science Engineering with specialization in network and Big
            Data Analytics. The successful candidates are occupying eminent
            positions in India as well as abroad and are making significant
            contributions to the economic development of the country in many
            spheres. The department has well- qualified staff in all major areas
            of the discipline.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
