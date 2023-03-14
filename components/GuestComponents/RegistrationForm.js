import React, {useState} from "react";
import {useRouter} from "next/router";
import {StepperContext} from "../../contexts/StepperContext";
import {initialValues, initialValuesErr} from "../../data/ResgisterData";
import Stepper from "./RegisterComponents/Stepper";
import StepperControl from "./RegisterComponents/StepperControl";
import UserAccount from "./RegisterComponents/steps/UserAccount.js";
import CompanyDetails from "./RegisterComponents/steps/CompanyDetails.js";
import UserDetails from "./RegisterComponents/steps/UserDetails.js";
import Final from "./RegisterComponents/steps/Final.js";
import axios from "axios";
function RegistrationForm({setStep}) {
  const router = useRouter();
  const [typeOfUser, setTypeOfUser] = useState("");
  const [userData, setUserData] = useState(initialValues);
  const [errors, setErrors] = useState(initialValuesErr);
  const [currentStep, setCurrentStep] = useState(1);
  const [stepHaveErrors, setStepHaveErrors] = useState(true);
  const steps = ["Type of user", "Details", "Final"];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <UserAccount stepHaveErrors={stepHaveErrors} setStepHaveErrors={setStepHaveErrors} />
        );
      case 2:
        if (userData.UserAccount.typeOfUser === "1") {
          return (
            <CompanyDetails stepHaveErrors={stepHaveErrors} setStepHaveErrors={setStepHaveErrors} />
          );
        }
        return (
          <UserDetails stepHaveErrors={stepHaveErrors} setStepHaveErrors={setStepHaveErrors} />
        );
      case 3:
        return <Final />;
    }
  };
  async function onSubmit() {
    const data = {
      email: userData.UserAccount.email,
      password: userData.UserAccount.password,
      entityType: userData.UserAccount.typeOfUser,
    };
    if (typeOfUser === "Company") {
      Object.assign(data, {
        entityName: userData.CompanyDetails.entityName,
        institutionName: "",
        entityAddress: userData.CompanyDetails.entityAddress,
        fiscalCode: userData.CompanyDetails.fiscalCode,
        subscription: userData.CompanyDetails.typeOfSubscription,
      });
    } else {
      Object.assign(data, {
        entityName: userData.UserDetails.entityName,
        institutionName: userData.UserDetails.institutionName,
        entityAddress: userData.UserDetails.entityAddress,
        fiscalCode: "-1",
        subscription: userData.UserDetails.typeOfSubscription,
      });
    }
    const res = await fetch("http://localhost:8080/registration/createAccount", {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
  }
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds
    if (newStep > steps.length) {
      onSubmit();
    }
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    newStep > 0 && newStep <= steps.length && setStep(newStep - 1);
  };
  return (
    <div className="h-full flex flex-col items-center px-10 pb-10 pt-5">
      <div className="container horizontal md:w-1/2 py-4">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="h-full w-full md:w-4/5 pb-4 md:pb-4">
        <StepperContext.Provider
          value={{
            userData,
            setUserData,
            errors,
            setErrors,
          }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
        stepHaveErrors={stepHaveErrors}
      />
    </div>
  );
}

export default RegistrationForm;
