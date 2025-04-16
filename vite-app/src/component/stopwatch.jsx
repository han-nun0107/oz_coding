import { useEffect, useState, useRef } from "react";
import FormatTime from "./formatTime";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn === true) {
      const timerId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      timerRef.current = timerId;
    } else {
      clearInterval(timerRef.current);
    }
  }, [isOn]);

  return (
    <>
      <div className="grid grid-rows-2 items-center justify-center">
        <div className="text-center">스탑워치</div>
        <div>
          {FormatTime(time)}
          <button
            className="bg-gray-400 ml-1 mr-1.5"
            onClick={() => setIsOn((prev) => !prev)}
          >
            {isOn ? "끄기" : "켜기"}
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
      </div>
    </>
  );
};

export default StopWatch;
