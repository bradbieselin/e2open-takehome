import React, { useState } from "react";
import CarIMG from "../assets/suv.png";
import SemiIMG from "../assets/semi.png";

const Car = ({ vehicle }) => {
  return (
    <div className={vehicle ? "semi-container moving" : "car-container"}>
      <img
        className={vehicle ? "semi" : "car"}
        src={vehicle ? SemiIMG : CarIMG}
        alt="car"
      ></img>
    </div>
  );
};

export default Car;
