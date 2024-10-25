import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Animation.css";

const fieldwidth = 700;
const fieldheight = 300;
const ballSize = 100;
const maxX = fieldwidth - ballSize - 2;
const maxY = fieldheight - ballSize - 2;
const vX = 5;
const vY = 5;
const rotationspeed = 10;

const Animation = () => {
  const [rotationangle, setRotationangle] = useState(0);
  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [y, setY] = useState(0);
  const [goDown, setGoDown] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState("");

  const toggleRun = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  const calculate = () => {
    let newX = x;
    let newY = y;
    let newGoRight = goRight;
    let newGoDown = goDown;

    if (goRight) {
      newX += vX;
      if (newX >= maxX) {
        newGoRight = false;
      }
    } else {
      newX -= vX;
      if (newX <= 0) {
        newGoRight = true;
      }
    }

    if (goDown) {
      newY += vY;
      if (newY >= maxY) {
        newGoDown = false;
      }
    } else {
      newY -= vY;
      if (newY <= 0) {
        newGoDown = true;
      }
    }

    setX(newX);
    setY(newY);
    setGoRight(newGoRight);
    setGoDown(newGoDown);
  };

  const process = () => {
    if (running) {
      calculate();
      setRotationangle((prevRotationangle) => prevRotationangle + rotationspeed);
    }
  };

  const changeBackgroundImage = (imageName) => {
    setBackgroundImage(`/img/${imageName}.png`);
  };  

  useEffect(() => {
    const interval = setInterval(process, 40);
    return () => clearInterval(interval);
  }, [running, x, y, goRight, goDown]);

  return (
    <div id="container" style={{ textAlign: "center", marginTop: "20px" }}>
      <div
      className="field"
        id="field"
        style={{
          width: `${fieldwidth}px`,
          height: `${fieldheight}px`,
          border: "1px solid black",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <div
        className="ball"
          id="ball"
          style={{
            width: `${ballSize}px`,
            height: `${ballSize}px`,
            backgroundImage: (`url(${backgroundImage})`),
            backgroundRepeat: "no-repeat",
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            transform: `rotate(${rotationangle}deg)`,
            borderRadius: "50%",
            backgroundColor: "white",
            border: "2px solid black",
          }}
        />
      </div>
      <div id="control" style={{ marginTop: "20px" }}>
        <button
          className={`btn ${running ? "btn-danger" : "btn-success"}`}
          onClick={toggleRun}
        >
          {running ? (
            <span className="bi bi-pause">&nbsp;PAUSE</span>
          ) : (
            <span className="bi bi-play">&nbsp;RUN</span>
          )}
        </button>
        &nbsp;&nbsp;
        <button
          className="btn btn-outline-secondary"
          onClick={() => changeBackgroundImage("")}
        >
          None
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => changeBackgroundImage("Basketball")}
        >
          Basketball
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => changeBackgroundImage("volleyball")}
        >
          Volleyball
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => changeBackgroundImage("football")}
        >
          Football
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => changeBackgroundImage("person")}
        >
          Person
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => changeBackgroundImage("cartoon")}
        >
          Cartoon
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => changeBackgroundImage("Eyeslogo")}
        >
          Logo
        </button>
      </div>
    </div>
  );
};

export default Animation;

