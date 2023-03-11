import React from "react";

function Select({selectData, name, value, handleChange}) {
  return (
    <>
      <select
        id={name}
        className="block px-2 appearance-none text-third font-semibold font-secondary uppercase bg-transparent focus:outline-none leading-8 absolute top-0 bottom-0 left-0 right-0"
        name={name}
        required
        onChange={(e) => handleChange(e)}
      >
        <option>{selectData.values[value]?.name || selectData.defaultValue}</option>
        {selectData.values.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
