import React from "react";

const Greeting = (props) => {
  console.log(props);
  return <h1 className="text-primary">Hello {props.name}</h1>;
};

export default Greeting;
