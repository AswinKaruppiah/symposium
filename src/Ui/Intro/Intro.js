import React from "react";
import intro from "./CodeFest design.4k (2).mp4";
import "./Intro.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function Intro() {
  return (
    <div className="intro">
      <Video muted autoPlay loop controls={false}>
        <source src={intro} type="video/webm" />
      </Video>
    </div>
  );
}

export default Intro;
