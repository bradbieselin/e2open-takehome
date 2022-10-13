import React, { useState } from "react";
import CarIMG from "../assets/21c.png";
import SemiIMG from "../assets/semi.png";

const Car = ({ vehicle }) => {
  return (
    <div className="car-container">
      <img
        className={vehicle ? "car" : "semi"}
        src={vehicle ? CarIMG : SemiIMG}
        alt="car"
      ></img>{" "}
    </div>
  );
};

export default Car;
