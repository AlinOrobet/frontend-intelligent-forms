import React, {useEffect, useState, useRef} from "react";

function Stepper({steps, currentStep}) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //current steps
      if (count == stepNumber) {
        if (count == stepNumber - 1) {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: true,
            selected: true,
            completed: true,
          };
        } else {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: true,
            selected: true,
            completed: false,
          };
        }
        count++;
      }
      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    //create object
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);
  const displaySteps = newStep?.map((step, index) => {
    return (
      <div
        key={index}
        className={index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"}
      >
        <div className="relative flex flex-col items-center text-teal-600">
          {/* Display number */}
          <div
            className={`rounded-full transition duration-500 ease-in-out border h-12 w-12 flex items-center justify-center py-3 ${
              step.selected
                ? "bg-third text-white font-bold border border-third"
                : "bg-gray text-third font-bold border border-gray"
            }`}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          {/* Display description */}
          <div
            className={`inline absolute top-0 text-center mt-14 w-24 text-xs uppercase ${
              step.highlighted ? "text-third font-bold" : "text-gray-400 font-medium"
            }`}
          >
            {step.description}
          </div>
        </div>
        {/* Display line */}
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? "border-third" : "border-gray"
          }`}
        ></div>
      </div>
    );
  });
  return <div className="mx-4 flex justify-between items-center">{displaySteps}</div>;
}

export default Stepper;
