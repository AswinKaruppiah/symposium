import React from "react";
import "./Clock.css";

const Clock = ({ Timerdate, TimerHour, TimerMin, TimerSec }) => {
  return (
    <div className="clock">
      <center>
        <h1>Register Now!</h1>
        <h2>Our event Register is On Live</h2>
        <h2>Hurry Up</h2>
        <h2>Win Exciting Prizes!</h2>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMRilJSY7mWG7ByZw0FzGxF-A-nR3Cqpij6-_C1AlL4BoMyw/viewform?usp=sf_link">
          Register Now
        </a>
      </center>
      <div className="clk-timer">
        <div>
          <center>
            <h1>{Timerdate}</h1>
            <h2>Day</h2>
          </center>
        </div>
        <div>
          <center>
            <h1>{TimerHour}</h1>
            <h2>Hour</h2>
          </center>
        </div>
        <div>
          <center>
            <h1>{TimerMin}</h1>
            <h2>Min</h2>
          </center>
        </div>
        <div>
          <center>
            <h1>{TimerSec}</h1>
            <h2>Secs</h2>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Clock;
