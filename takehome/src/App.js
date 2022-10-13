import "./App.css";
import { useState } from "react";
import InfiniteRoad from "./components/InfiniteRoad";
import Car from "./components/Car";

function App() {
  const [vehicle, setVehicle] = useState(true);

  return (
    <>
      <div className="navbar">
        <button onClick={(e) => setVehicle(!vehicle)}>Change Vehicle</button>
      </div>
      <div className="container">
        <Car vehicle={vehicle} />
        <InfiniteRoad />
      </div>
    </>
  );
}

export default App;
