import React from "react";

const StopLight = ({ onLightChange, lightStatus }) => {
  return (
    <div className="stoplight-container">
      <button onClick={(e) => onLightChange("Green")}>Green</button>
      <button onClick={(e) => onLightChange("Left-Turn Green")}>
        Left-Turn Green
      </button>
      <button onClick={(e) => onLightChange("Yellow")}>Yellow</button>
      <button onClick={(e) => onLightChange("Red")}>Red</button>
      <div>
        <div>Current Color: {lightStatus}</div>
      </div>
    </div>
  );
};

export default StopLight;
