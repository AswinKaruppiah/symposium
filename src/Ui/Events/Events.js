import React from "react";
import tech from "./20230327_134355.jpg";
import nontech from "./20230327_135433.jpg";
import workshopimg from "./20230327_141610.jpg";
import "./Events.css";
import "./Eventimg.css";

import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();

  return (
    <div className="events">
      <center>
        <h1 className="e-h1">Events</h1>
        <div className="e-detail">
          <div className="EventsImg-detail">
            <img
              onClick={() => navigate.push("symposium/tech")}
              src={tech}
              className="EventsImg"
              alt="not"
            />
          </div>
          <div className="EventsImg-detail">
            <img
              // onClick={(e) => {
              //   window.location.href = "/workshop";
              // }}
              src={workshopimg}
              className="EventsImg"
              alt="not"
            />
          </div>
          <div className="EventsImg-detail">
            <img
              // onClick={(e) => {
              //   window.location.href = "/nontech";
              // }}
              src={nontech}
              className="EventsImg"
              alt="not"
            />
          </div>
        </div>
      </center>
    </div>
  );
}

export default Events;
