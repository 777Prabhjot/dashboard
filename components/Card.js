"use client";
import { useState } from "react";
import Realistic from "./Realistic";

const Card = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="cardContainer">
      <div className="birthdayCard">
        <div className="cardFront" onClick={() => setClick(true)}>
          <h3 className="happy !rotate-0">CLICK ME TEDDU!</h3>
          <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY!</h3>
          <p>Dear Teduu,</p>
          <p>
            {`🎉 Happy Birthday, Teddu🧸! 🎂 Your charm is as irresistible as a teddy
          ${`bear's`} cuddle. May your day be as sweet and warm as your smile!`}
          </p>
        </div>
      </div>
      <Realistic click={click} />
    </div>
  );
};

export default Card;
