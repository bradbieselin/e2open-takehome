import "./App.css";
import { useState } from "react";
import InfiniteRoad from "./components/InfiniteRoad";
import Car from "./components/Car";
import StopLight from "./components/StopLight";

function App() {
  const [vehicle, setVehicle] = useState(true);
  const [status, setStatus] = useState("Vehicle stopped");
  const [lightStatus, setLightStatus] = useState("Green");
  const [jackknife, setJackknife] = useState(false);
  const [prevAction, setPrevAction] = useState(null);

  function handleCommand(e) {
    const { textContent } = e.target;

    if (textContent === "Move Forward") {
      if (status === "Vehicle moving forward") {
        console.error("Vehicle moving forward already");
      }
      setPrevAction("Move Forward");
      setJackknife(false);
      setStatus("Vehicle moving forward");
    } else if (textContent === "Turn Left") {
      setPrevAction("Turn Left");
      setLightStatus("Green");
      setStatus("Vehicle turned left");
    } else if (textContent === "Turn Right") {
      setPrevAction("Turn Right");
      setLightStatus("Green");
      setStatus("Vehicle turned right");
    } else {
      if (textContent === "Jackknife to a stop") {
        setPrevAction("Jackknife to a stop");
        setLightStatus("Green");
        setJackknife(true);
        setStatus("Vehicle stopped");
      } else {
        if (prevAction !== "Move Forward") {
          console.error("Previous Action was not Move Forward");
        } else {
          setPrevAction("Ran over a Ford Pinto");
          setLightStatus("Green");
          setStatus("Ran over a Ford Pinto");
        }
      }
    }
  }

  function onLightChange(status) {
    setLightStatus(status);
  }

  return (
    <>
      <div className="navbar">
        <button
          onClick={(e) => {
            setVehicle(!vehicle);
            setStatus("Vehicle stopped");
            setLightStatus("Green");
            setJackknife(false);
            setPrevAction(null);
          }}
        >
          Change Vehicle
        </button>
        <button onClick={handleCommand}>Move Forward</button>
        <button
          onClick={handleCommand}
          disabled={lightStatus !== "Left-Turn Green" || jackknife === true}
        >
          Turn Left
        </button>
        <button onClick={handleCommand} disabled={jackknife === true}>
          Turn Right
        </button>
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
