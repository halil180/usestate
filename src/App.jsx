import React,{ useState } from "react";
import img from "./assets/img.png";
import "./App.css";
import like from "./like.json";
import Lottie from "lottie-react";

function App() {

  const [count,setCount] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 100, y: 100 });

  function showCoords(event) {
    setCount((count) => count + 1)
    console.log("you clicked somewhere")
    setCoordinates({ x: event.clientX, y: event.clientY });
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 25);
  }  
  
  return (
    <main onClick={showCoords}>
      <div
        style={{
          position: "absolute",
          left: `${coordinates.x}px`,
          top: `${coordinates.y}px`,
          height: 100,
          width: 100,
        }}
      >
        <Lottie animationData={like} loop={showAnimation} />
      </div>
      <div className="App" onClick={(e) => showCoords(e)}>
        <div>
          <a href="https://hicoders.ch/de/" target="_blank">
            <img src={img} alt="React logo" className="logo" />
          </a>
        </div>
        <h1>Hicoders</h1>
        <div className="card">
          <h1>You clicked {count} {count === 0 ? "time" : "times"}</h1>
        </div>
        <p className="read-the-docs">hicoders 2022</p>
      </div>
    </main>
  );
}

export default App;
