import React from "react";

function Input({handleChange, type, name}) {
  return (
    <>
      <input
        type={type}
        id={name}
        className="form_input peer"
        placeholder=" "
        onChange={handleChange}
        name={name}
        required
        autoComplete="off"
      />
    </>
  );
}

export default Input;
