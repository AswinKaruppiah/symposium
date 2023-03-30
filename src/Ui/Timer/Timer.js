import React, { useEffect, useRef, useState } from "react";
import Clock from "./Clock/Clock";

function Timer() {
  const [Timerdate, setTimerdate] = useState();
  const [TimerHour, setTimerHour] = useState();
  const [TimerMin, setTimerMin] = useState();
  const [TimerSec, setTimerSec] = useState();
  const [alert, setalert] = useState(false);

  let interval = useRef();
  const StatTimer = () => {
    const countDownDate = new Date("April 29,2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        setalert(true);
      } else {
        setTimerdate(days);
        setTimerHour(hours);
        setTimerSec(seconds);
        setTimerMin(minutes);
      }
    });
  };
  useEffect(() => {
    StatTimer();
  });

  return (
    <div className="timer">
      <Clock
        Timerdate={Timerdate}
        TimerHour={TimerHour}
        TimerMin={TimerMin}
        TimerSec={TimerSec}
        alert={alert}
      />
    </div>
  );
}

export default Timer;
