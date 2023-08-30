"use client";
import "./App.css";
import WishText from "@/components/WishText";
import Cake from "@/components/Cake";
import Card from "@/components/Card";
import Drawer from "@/components/Drawer";
import Clock from "@/components/Clock";
import { useState } from "react";

export default function Home() {
  const [birthday, setIsBirthday] = useState(false);
  const isBirthday = (value) => {
    setIsBirthday(value);
  };
  return (
    <>
      {!birthday ? (
        <Clock isBirthday={isBirthday} />
      ) : (
        <div>
          <div className="cakeContainer">
            <Cake />
          </div>
          <Card />
          <div className="drawerContainer relative">
            <h1 className="absolute top-16 left-[40%] text-[20px] w-[150px]">
              HEY TEDDU LETS OPEN DRAWER
            </h1>
            <Drawer />
          </div>
          <WishText />
        </div>
      )}
    </>
  );
}
