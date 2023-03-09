import React from "react";

function Input({handleChange, type, name, value}) {
  return (
    <>
      <input
        type={type}
        id={name}
        className="form_input peer"
        placeholder=" "
        onChange={handleChange}
        name={name}
        value={value}
        required
        autoComplete="off"
      />
    </>
  );
}

export default Input;
