import React, { useState, useEffect } from "react";
import SquareBox from "./components/SquareBox";

const boxes = [
  { buttonColor: "blue", color: "red" },
  { buttonColor: "yellow", color: "blue" },
  { buttonColor: "blue", color: "green" },
  { buttonColor: "blue", color: "yellow" },
];

const App = () => {
  const [clickedText, setClickedText] = useState("0");
  const [count, setCount] = useState(0);
  const obj = {};

  useEffect(() => {
    console.log("hi");
  }, [count]);

  return (
    <div>
      <h1>{clickedText}</h1>
      <h1>Count: {count}</h1>

      {boxes.map((box) => (
        <SquareBox
          key={box.color}
          color={box.color}
          btnColor={box.buttonColor}
          setClickedText={setClickedText}
          setCount={setCount}
        />
      ))}

      {/* <SquareBox color="red" setClickedText={setClickedText} />
      <br />
      <SquareBox color="blue" setClickedText={setClickedText} />
      <br />
      <SquareBox color="green" setClickedText={setClickedText} /> */}
    </div>
  );
};

export default App;
