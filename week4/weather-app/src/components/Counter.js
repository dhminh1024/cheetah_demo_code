import React, { useState, useEffect } from "react";

const Counter = () => {
  let [number, setNumber] = useState(() => {
    return Number(localStorage.getItem("number")) || 0;
  });
  let [value, setValue] = useState(number);

  const handleAddClick = () => {
    // wrong
    // number = number + 1;

    setNumber((currentNumber) => currentNumber + 1);
    setNumber((currentNumber) => currentNumber + 1);
    // this doesn't work
    // console.log(number);
  };
  const handleMinusClick = () => {
    // wrong
    // number = number - 1;

    setNumber((currentNumber) => currentNumber - 1);
    setNumber((currentNumber) => currentNumber - 1);

    // this doesn't work
    // console.log(number);
  };

  useEffect(() => {
    // setNumber((currentNumber) => currentNumber + 10);
    console.log(number);
    document.title = number;
    localStorage.setItem("number", JSON.stringify(number));
  }, [number]);

  return (
    <div>
      <button onClick={handleAddClick}>+</button>
      {number}
      <button onClick={handleMinusClick}>-</button>
    </div>
  );
};

export default Counter;
