import React from "react";

function Input({handleChange, type, name, touched, setTouched}) {
  const pair = {[name]: true};
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
        onBlur={() => setTouched((current) => [...current, pair])}
      />
    </>
  );
}

export default Input;
//setTouched({...touched}, {[name]: "true"})
