import React from "react";
function ToolTip({name, icon, errors, handleShow, touched}) {
  return (
    <div className="relative cursor-pointer group">
      <div
        onClick={
          name === "password" || name === "confirmPassword" ? () => handleShow(name) : () => {}
        }
        className={`cursor-pointer mx-5 ${
          errors[name] && touched === true
            ? "text-red-300 group:hover:inline-block"
            : "hover:text-[#6366f1]"
        }`}
      >
        {icon}
      </div>
      <span
        className={`absolute hidden ${
          errors[name] ? "group-hover:inline-block" : ""
        } inner-block left-1/2 -translate-x-[17rem] w-[18rem] bottom-[calc(100%+4px)] bg-neutral-900 text-white text-xs p-2 whitespace-nowrap rounded text-center `}
      >
        {errors[name]}
      </span>
      <span
        className={`absolute hidden ${
          errors[name] ? "group-hover:inline-block" : ""
        } inner-block border-[6px] left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-neutral-900`}
      ></span>
    </div>
  );
}

export default ToolTip;
