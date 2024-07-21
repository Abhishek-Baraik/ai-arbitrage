import React, { useEffect, useRef, useState } from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;
  return (
    <div className="flex justify-around">
        <div>
    <div className="border-[2px] border-primaryColor p-3 text-[32px] font-bold rounded-2xl">
        00
      </div>
      <span className="text-[16px] lg:text-[20px]">Hours</span>
      </div>
    <div className=" p-3 text-[32px] text-primaryColor font-bold rounded-2xl">
        :
      </div>
      <div>
      <div className="border-[2px] flex justify-center border-primaryColor p-3 text-[32px] font-bold rounded-2xl">
        {minutes}
      </div>
      <span className="text-[16px] lg:text-[20px]">Minutes</span>
      </div>
      <div className=" p-3 text-[32px] text-primaryColor font-bold rounded-2xl">
        :
      </div>
      <div>
      <div className="border-[2px] flex justify-center border-primaryColor p-3 text-[32px] font-bold rounded-2xl">
        {seconds}
      </div>
      <span className="text-[16px] lg:text-[20px]"> Seconds</span>
      </div>
    </div>
  );
};

const Counter = ({ seconds }) => {
  const [countdown, setCountdown] = useState(seconds);
  const timerID = useRef();

  useEffect(() => {
    timerID.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerID.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerID.current);
      // alert("end")
    }
  }, [countdown]);

  return (
    <div className="text-[26px] rounded-md mt-10">
      {formatTime(countdown)}
    </div>
  );
};

export default Counter;
