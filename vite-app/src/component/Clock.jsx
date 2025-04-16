import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>현재 시간</div>
        <div>{time.toLocaleTimeString()}</div>
      </div>
    </>
  );
};

export default Clock;
