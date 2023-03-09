import React from "react";
function ToolTip({name, icon, handleShow}) {
  return (
    <div className="relative cursor-pointer group">
      <div
        onClick={
          name === "password" || name === "confirmPassword" ? () => handleShow(name) : () => {}
        }
        className="cursor-pointer mx-3 md:mx-5"
      >
        {icon}
      </div>
    </div>
  );
}

export default ToolTip;
