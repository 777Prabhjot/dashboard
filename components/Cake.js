"use client";
import React, { useState, useRef, useEffect } from "react";
import Coffeti from "./Cofetti";

const Cake = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  const audioRef = useRef(null);

  useEffect(() => {
    if (click && audioRef.current) {
      audioRef.current.play();
    }
  }, [click]);
  return (
    <>
      <div id="birthday-cake">
        <div className="cake">
          <div className="middle" />
          <div className="chocs" />
          <div className="top" />
        </div>
        <div className="candles" onClick={handleClick}>
          <div className="flame" style={{ opacity: click && "0" }} />
          <div className="flame2" style={{ opacity: click && "0" }} />
          <div className="flame3" style={{ opacity: click && "0" }} />
          {click && (
            <div
              className="text"
              style={{ opacity: "1", top: "-130px", zIndex: 100 }}
            >
              Happy Birthday Teddu🥳!
            </div>
          )}
          <div className="shadows" />
        </div>
        <p className="text2 !text-[30px] underline">
          *click on the flame to blow candles Teddu
        </p>
      </div>
      <Coffeti click={click} />
      <audio ref={audioRef}>
        <source src="/br.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Cake;
