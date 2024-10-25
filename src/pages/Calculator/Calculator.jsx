import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const appendToDisplay = (input) => {
    setDisplay((prevDisplay) => prevDisplay + input);
  };
  const clearDisplay = () => {
    setDisplay("");
  };
  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const checkKeyboard = (e) => {
    if (e.key === "Escape") {
      clearDisplay();
    } else if (e.key === "Enter") {
      calculate();
    } else if (["+", "-", "*", "/"].includes(e.key)) {
      appendToDisplay(e.key);
    } else if (!isNaN(e.key) || e.key === ".") {
      appendToDisplay(e.key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", checkKeyboard);
    return () => {
      document.removeEventListener("keydown", checkKeyboard);
    };
  }, [display]);

  return (
    <div className="calculator-container">
      <div className="card">
        <div className="calculator-body">
          <input
            type="text"
            id="display"
            className="form-control mb-3"
            value={display}
            readOnly
          />
          <div className="button-row">
            <button className="button" onClick={() => appendToDisplay("1")}>1</button>
            <button className="button" onClick={() => appendToDisplay("2")}>2</button>
            <button className="button" onClick={() => appendToDisplay("3")}>3</button>
            <button className="button-op" onClick={() => appendToDisplay("+")}>+</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={() => appendToDisplay("4")}>4</button>
            <button className="button" onClick={() => appendToDisplay("5")}>5</button>
            <button className="button" onClick={() => appendToDisplay("6")}>6</button>
            <button className="button-op" onClick={() => appendToDisplay("-")}>-</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={() => appendToDisplay("7")}>7</button>
            <button className="button" onClick={() => appendToDisplay("8")}>8</button>
            <button className="button" onClick={() => appendToDisplay("9")}>9</button>
            <button className="button-op" onClick={() => appendToDisplay("*")}>*</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={() => appendToDisplay("0")}>0</button>
            <button className="button" onClick={clearDisplay}>C</button>
            <button className="button" onClick={calculate}>=</button>
            <button className="button-op" onClick={() => appendToDisplay("/")}>/</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

