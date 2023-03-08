import React, {useState} from "react";
import {useRouter} from "next/router";
import {StepperContext} from "../../contexts/StepperContext";
import Stepper from "./RegisterComponents/Stepper";
import StepperControl from "./RegisterComponents/StepperControl";
import UserAccount from "./RegisterComponents/steps/UserAccount.js";
import CompanyDetails from "./RegisterComponents/steps/CompanyDetails.js";
import UserDetails from "./RegisterComponents/steps/UserDetails.js";
import Final from "./RegisterComponents/steps/Final.js";
function RegistrationForm({setStep}) {
  const router = useRouter();
  const [typeOfUser, setTypeOfUser] = useState("");
  const initialValues = {};
  const [userData, setUserData] = useState(initialValues);
  const [finalData, setFinalData] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Type of user", "Details", "Final"];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <UserAccount setTypeOfUser={setTypeOfUser} />;
      case 2:
        if (typeOfUser === "Company") {
          return <CompanyDetails />;
        }
        return <UserDetails />;
      case 3:
        return <Final />;
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds
    if (newStep > steps.length) {
      router.push("/login");
    }
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    newStep > 0 && newStep <= steps.length && setStep(newStep - 1);
  };
  return (
    <div className="h-full flex flex-col items-center px-10 py-3">
      <div className="container horizontal md:w-1/2 py-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="h-full w-full md:w-4/5 pb-4 md:pb-6">
        <StepperContext.Provider
          value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
    </div>
  );
}

export default RegistrationForm;
