"use client";
import { useRef, useEffect } from "react";
import "../app/Clock.css";

const Clock = ({ isBirthday }) => {
  const today = new Date().getTime();
  const targetDate = new Date("2023-08-30T20:40:00").getTime();

  // countdown
  const timerDiv = useRef(null);

  if (today >= targetDate) {
    isBirthday(true);
  }

  useEffect(() => {
    let timer = setInterval(function () {
      // get today's date
      const today = new Date().getTime();

      // get the difference
      const diff = targetDate - today;

      // math
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // display
      if (timerDiv.current) {
        timerDiv.current.innerHTML =
          '<div class="days"> \
      <div class="numbers">' +
          days +
          '</div>days</div> \
    <div class="hours"> \
      <div class="numbers">' +
          hours +
          '</div>hours</div> \
    <div class="minutes"> \
      <div class="numbers">' +
          minutes +
          '</div>minutes</div> \
    <div class="seconds"> \
      <div class="numbers">' +
          seconds +
          "</div>seconds</div> \
    </div>";
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return (
    <>
      <div className="container">
        <div className="balloon white">
          <div className="star-red" />
          <div className="face">
            <div className="eye" />
            <div className="mouth happy" />
          </div>
          <div className="triangle" />
          <div className="string" />
        </div>
        <div className="balloon red">
          <div className="star" />
          <div className="face">
            <div className="eye" />
            <div className="mouth happy" />
          </div>
          <div className="triangle" />
          <div className="string" />
        </div>
        <div className="balloon blue">
          <div className="star" />
          <div className="face">
            <div className="eye" />
            <div className="mouth happy" />
          </div>
          <div className="triangle" />
          <div className="string" />
        </div>
        <div id="timer" ref={timerDiv} />
        <h1>waiting for 2nd september</h1>
      </div>
      <footer>
        <p>
          made by <a href="https://codepen.io/juliepark"> Prabh</a> ♡
        </p>
      </footer>
    </>
  );
};

export default Clock;
