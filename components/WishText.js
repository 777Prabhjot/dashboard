import React from "react";

const WishText = () => {
  return (
    <div className="main-div">
      <div className="center_div">
        <p>Wishing You a Very Happy Birthday Teddu</p>
        🎂
        <div>
          Stay Happy & Bleesed <br />
          <div className="text-[22px] text-red-400 shadow-none">
            Click on Heart 👇
          </div>
          <div
            className="animate cursor-pointer"
            onClick={() => {
              window.location.href = "https://birthtd.vercel.app/";
            }}
          >
            <div class="love"></div>
          </div>
          from your Chassu
        </div>
      </div>
    </div>
  );
};

export default WishText;
