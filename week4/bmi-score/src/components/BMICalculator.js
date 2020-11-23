import React, { useState } from "react";

const BMICalculator = () => {
  const [result, setResult] = useState("Result:");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.dir(e.target);
    // console.log(e.target.elements.height.value);
    // console.log(e.target.elements.weight.value);
    // let weight = e.target.elements.weight.value;
    // let height = e.target.elements.height.value;
    let bmiScore = weight / (height / 100) ** 2;
    let bmiType = "";
    if (bmiScore < 18.5) {
      bmiType = "underweight";
    } else if (bmiScore >= 18.5 && bmiScore < 25) {
      bmiType = "normal";
    } else if (bmiScore >= 25 && bmiScore < 30) {
      bmiType = "overweight";
    } else {
      bmiType = "obese";
    }
    setResult(`Result: ${bmiScore} - ${bmiType}`);
  };

  const handleHeightChange = (e) => {
    // console.log(e.target.value);
    const inputHeight = Number(e.target.value);
    console.log(inputHeight);
    if (inputHeight <= 250) {
      setHeight(inputHeight);
    }
  };
  const handleWeightChange = (e) => {
    // console.log(e.target.value);
    const inputWeight = Number(e.target.value);
    if (inputWeight <= 400) {
      setWeight(inputWeight);
    }
  };
  return (
    <div>
      <h1>BMI Caclculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={weight}
          onChange={handleWeightChange}
        />
        <input
          className="form-control"
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={height}
          onChange={handleHeightChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {result}
      </form>
    </div>
  );
};

export default BMICalculator;
