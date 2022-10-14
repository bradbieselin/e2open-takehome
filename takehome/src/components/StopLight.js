import React from "react";

const StopLight = ({ onLightChange, lightStatus }) => {
  return (
    <div className="stoplight-container">
      <button onClick={onLightChange("Green")}>Green</button>
      <button onClick={onLightChange("Left-Turn Green")}>
        Left-Turn Green
      </button>
      <button onClick={onLightChange("Yellow")}>Yellow</button>
      <button onClick={onLightChange("Red")}>Red</button>
    </div>
  );
};

export default StopLight;
