import React from "react";

function StepperControl({handleClick, currentStep, steps, stepHaveErrors}) {
  return (
    <div className="container flex justify-between md:justify-around">
      {/* back button */}
      <button
        onClick={() => handleClick()}
        className={`bg-button text-white uppercase py-2 px-5 md:px-8 rounded-md font-semibold cursor-pointer hover:bg-[#223641] hover:text-white transition duration-200 ease-in-out shadow-xl ${
          currentStep === 1 ? "opacity-0 cursor-default" : "cursor-pointer"
        }`}
      >
        {currentStep === steps.length ? "Back to edit" : "back"}
      </button>
      {/* next button */}
      <button
        onClick={() => {
          if (!stepHaveErrors) handleClick("next");
        }}
        className={`bg-button text-white uppercase py-2 px-5 md:px-8 rounded-md font-semibold cursor-pointer hover:bg-[#223641] hover:text-white transition duration-200 ease-in-out shadow-xl ${
          stepHaveErrors ? "cursor_not_allowed" : ""
        }`}
      >
        {currentStep === steps.length ? "Confirm" : "Next"}
      </button>
    </div>
  );
}

export default StepperControl;
