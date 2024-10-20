import React from "react";
import { useState, useEffect } from "react";
import Title from "../title/title";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = "April, 3, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timerMain patternBg hiddenAnimation">
      <Title
        externalClass={`f22 pb40 flex justify-center text-white font-normal f-secondary hiddenAnimation`}
        title={"Deadline Countdown"}
      />

      <div className={`grid grid-cols-6`}>
        <div className="col-span-2 flex flex-col justify-center items-center timerDivider hiddenAnimation">
          <p
            className={`sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white tickerStyle hiddenAnimation tickerMargin`}
          >
            {days < 10 ? "0" + days : days}
          </p>
          <span className={`text-white f22 hiddenAnimation`}>Days</span>
        </div>

        <div className="col-span-4 flex ">
          <div className="flex justify-center flex-col items-center">
            <div
              className={`sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white flex items-center justify-center hiddenAnimation tickerMargin`}
            >
              <p className="tickerStyle hiddenAnimation">
                {hours < 10 ? "0" + hours : hours}
              </p>
              <p>:</p>
            </div>
            <span className={`text-white f22 hiddenAnimation`}>Hours</span>
          </div>

          <div className="flex justify-center flex-col items-center">
            <div
              className={` sm:text-3xl  md:text-4xl lg:text-6xl font-bold text-white flex items-center hiddenAnimation tickerMargin`}
            >
              <p className="tickerStyle hiddenAnimation">
                {minutes < 10 ? "0" + minutes : minutes}{" "}
              </p>
              :
            </div>
            <span className={`text-white f22 hiddenAnimation`}>Minutes</span>
          </div>

          <div className="flex justify-center flex-col items-center hiddenAnimation">
            <p
              className={` sm:text-3xl  md:text-4xl lg:text-6xl font-bold text-white tickerStyle hiddenAnimation tickerMargin`}
            >
              {seconds < 10 ? "0" + seconds : seconds}
            </p>
            <span className={`text-white f22 hiddenAnimation`}>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
