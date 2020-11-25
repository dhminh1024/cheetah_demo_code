import React from "react";

const Message = ({ name, yearOfBirth }) => {
  return <h3>{`Hi ${name}! You are ${2020 - yearOfBirth} years old`}</h3>;
};

export default Message;
