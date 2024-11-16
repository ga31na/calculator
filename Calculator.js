import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  // Handle number and operator clicks
  const handleClick = (value) => {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  // Handle Delete button
  const handleDelete = () => {
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  };

  // Handle Reset button
  const handleReset = () => {
    setDisplay("0");
  };

  // Handle Calculation
  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString()); // Use eval carefully in production
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {/* Numbers and Operators */}
        {["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x"].map((item) => (
          <button
            key={item}
            onClick={() =>
              item === "DEL"
                ? handleDelete()
                : item === "+"
                ? handleClick("+")
                : item === "-"
                ? handleClick("-")
                : item === "x"
                ? handleClick("*")
                : item === "/"
                ? handleClick("/")
                : handleClick(item)
            }
          >
            {item}
          </button>
        ))}
        {/* Reset and Calculate */}
        <button className="reset" onClick={handleReset}>
          RESET
        </button>
        <button className="equals" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
