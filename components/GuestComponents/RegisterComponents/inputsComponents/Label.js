import React from "react";

function Label({htmlFor, text}) {
  return (
    <label
      htmlFor={htmlFor}
      className="form_label peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 uppercase"
    >
      {text}
    </label>
  );
}

export default Label;
