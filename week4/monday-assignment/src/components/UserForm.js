import React, { useState } from "react";

const UserForm = ({
  name,
  yoB,
  errorMessage,
  handleSubmit,
  handleNameChange,
  handleYoBChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleNameChange} />
      <input type="number" name="yoB" value={yoB} onChange={handleYoBChange} />
      <small className="text-danger">{errorMessage}</small>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
