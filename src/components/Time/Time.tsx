import { useState, useEffect } from "react";
import "./Time.scss";

export const Time = () => {
  const [time, setTime] = useState(new Date());
  const hours = time.getHours();
  const minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const seconds =
    time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

  const newYorkTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
  });
  const londonTime = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/London",
  });

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="time">
      <div className="time__town">
        <span>New-York: </span>
        {newYorkTime}
      </div>
      <div className="time__town">
        <span>London: </span>
        {londonTime}
      </div>
      <div className="time__current">
        <span>Your time:</span>
        {` ${hours}:${minutes}:${seconds}`}
      </div>
    </div>
  );
};
