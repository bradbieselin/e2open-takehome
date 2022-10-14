import "./App.css";
import { useState } from "react";
import InfiniteRoad from "./components/InfiniteRoad";
import Car from "./components/Car";
import StopLight from "./components/StopLight";

function App() {
  const [vehicle, setVehicle] = useState(true);
  const [status, setStatus] = useState("Vehicle stopped");
  const [lightStatus, setLightStatus] = useState("Green");

  function handleCommand(e) {
    const { textContent } = e.target;

    if (textContent === "Move Forward") {
      setStatus("Vehicle moving forward");
    } else if (textContent === "Turn Left") {
      setStatus("Vehicle turned left");
    } else if (textContent === "Turn Right") {
      setStatus("Vehicle turned right");
    } else {
      if (textContent === "Jackknife to a stop") {
        setStatus("Vehicle stopped");
      } else {
        setStatus("Ran over a Ford Pinto");
      }
    }
  }

  function onLightChange(status) {
    setLightStatus(status);
  }

  return (
    <>
      <div className="navbar">
        <button onClick={(e) => setVehicle(!vehicle)}>Change Vehicle</button>
        <button onClick={handleCommand}>Move Forward</button>
        <button onClick={handleCommand}>Turn Left</button>
        <button onClick={handleCommand}>Turn Right</button>
        <button onClick={handleCommand}>
          {vehicle ? "Jackknife to a stop" : "Run over a Ford Pinto"}
        </button>
      </div>
      <div className="status-area">
        <div className="vehicle-status">{status}</div>
        <StopLight onLightChange={onLightChange} lightStatus={lightStatus} />
      </div>
      <div className="container">
        <Car vehicle={vehicle} />
        <InfiniteRoad />
      </div>
    </>
  );
}

export default App;
