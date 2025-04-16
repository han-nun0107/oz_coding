import { useEffect, useRef, useState } from "react";
import FormatTime from "./formatTime";

const Timer = () => {
  const [startTime, setStartTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn && time > 0) {
      const timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      timerRef.current = timerId;
    } else if (!isOn || time === 0) {
      clearInterval(timerRef.current);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isOn, time]);

  return (
    <>
      <div className="grid grid-rows-[.1fr_.3fr_.2fr] items-center justify-center">
        <div className="text-center">타이머</div>
        <div className="mt-1.5">
          {time ? FormatTime(time) : FormatTime(startTime)}
          <button
            className="bg-gray-400 mr-1.5 ml-1"
            onClick={() => {
              setIsOn(true);
              setTime(time ? time : startTime);
              setStartTime(0);
            }}
          >
            시작
          </button>
          <button className="bg-gray-400 mr-1.5" onClick={() => setIsOn(false)}>
            멈춤
          </button>
          <button
            className="bg-gray-400"
            onClick={() => {
              setTime(0);
              setIsOn(false);
            }}
          >
            리셋
          </button>
        </div>
        <div>
          <input
            className="w-[100%]"
            type="range"
            value={startTime}
            min="0"
            max="3600"
            step="30"
            onChange={(event) => setStartTime(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Timer;
