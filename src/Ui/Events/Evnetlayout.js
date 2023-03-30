import React from "react";
import "./Evnetlayout.css";

function Evnetlayout(props) {
  console.log(props.src);
  return (
    <div
      className="Evnetlayout"
      style={{
        backgroundImage: `url(${props.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="event-time">
        <h3>{props.time}</h3>
      </div>
      <div className="Evnetlayout-Detail">
        <h1>{props.Name}</h1>
        <p>{props.detail}</p>
      </div>
    </div>
  );
}

export default Evnetlayout;
