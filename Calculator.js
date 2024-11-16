import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  // Handle button clicks (numbers and operators)
  const handleButtonClick = (value) => {
    if (display === "0" && !isNaN(value)) {
      setDisplay(value); // Replace initial 0 with the number
    } else {
      setDisplay(display + value); // Append value to display
    }
  };

  // Handle delete button
  const handleDelete = () => {
    if (display.length === 1 || display === "Error") {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1)); // Remove the last character
    }
  };

  // Handle reset button
  const handleReset = () => {
    setDisplay("0");
  };

  // Handle calculation
  const handleCalculate = () => {
    try {
      // Replace 'x' with '*' for multiplication
      const sanitizedExpression = display.replace(/x/g, "*");
      const result = eval(sanitizedExpression); // Evaluate the expression
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error"); // Handle invalid expressions
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "DEL"
                ? handleDelete()
                : ["+", "-", "/", "x"].includes(btn)
                ? handleButtonClick(btn)
                : handleButtonClick(btn)
            }
          >
            {btn}
          </button>
        ))}
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
