import React, { useState, useEffect, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const double = expensiveCalculate(number);

  const [light, setLight] = useState(true);

  const themeStyles = {
    marginTop: "10px",
    width: "100px",
    height: "100px",
    border: "1px solid black",
    textAlign: "center",
    backgroundColor: light ? "white" : "black",
    color: light ? "black" : "white",
  };

  // useEffect(() => {
  //   console.log("Theme Changed");
  // }, [themeStyles]);

  function expensiveCalculate(number) {
    for (let i = 0; i < 1000000000; i++) {}
    return 2 * number;
  }
  return (
    <div>
      <p>{"=".repeat(40)}</p>
      <h2>useMemo</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ width: "50px" }}
      />
      <span> &times; 2 = {double}</span>
      <p>{"-".repeat(40)}</p>
      <button onClick={() => setLight((previousValue) => !previousValue)}>
        Change Theme
      </button>
      <div style={themeStyles}>React</div>
    </div>
  );
};

export default UseMemoExample;
