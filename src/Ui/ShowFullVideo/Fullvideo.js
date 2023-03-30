import React from "react";
import promo from "./Symposium 4k.mp4";
import "./Fullvideo.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function Fullvideo() {
  return (
    <div className="Fullvideo">
      <Video
        // autoPlay
        loop
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
      >
        <source src={promo} type="video/webm" />
      </Video>
    </div>
  );
}

export default Fullvideo;
