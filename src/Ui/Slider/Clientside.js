import React from "react";
import Slider from "./Slider";
import slides from "./data.json";

function Clientside() {
  // console.log(slides);
  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
}

export default Clientside;
