import React from "react";
import "./Eventimg.css";

function EventsImg(props) {
  return (
    <div className="EventsImg-detail">
      <img
        onClick={props.onClick}
        className="EventsImg"
        src={props.src}
        alt="not"
      />
    </div>
  );
}

export default EventsImg;
