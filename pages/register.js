import React, {useState} from "react";
import Image from "next/legacy/image";
import MainLayout from "../layout/MainLayout";
import {RegisterData} from "../data/ResgisterData";
import RegistrationForm from "../components/GuestComponents/RegistrationForm";
function Register() {
  const [step, setStep] = useState(0);
  return (
    <MainLayout activeLink="register">
      <div className="flex-grow flex rounded-xl shadow-2xl bg-white m-3 lg:mx-14">
        <div className="font-secondary hidden lg:flex flex-col items-center w-2/5 py-10">
          <div className="flex flex-col items-center z-10">
            <h1 className="text-4xl font-extrabold mb-1 text-third font-secondary">
              {RegisterData[step].title}
            </h1>
            <p className="text-center text-lg font-bold w-4/5 text-third font-secondary">
              {RegisterData[step].subtitle}
            </p>
          </div>
          <div className={`relative w-2/3 h-full ${step === 1 ? "scale-x-[-1]" : ""}`}>
            <Image
              src={RegisterData[step].image}
              alt={RegisterData[step].title}
              layout="fill"
              objectFit="cover"
              priority
              sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
              className="h-full w-full"
            />
          </div>
          <p className="text-center text-lg font-bold w-4/5 z-10 text-third font-secondary">
            {RegisterData[step].subtitle_2}
          </p>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col shadow-2xl pt-5 pb-2 md:py-10">
          <h2 className="text-4xl font-secondary text-center font-extrabold text-third font-secondary">
            {RegisterData[step].formTitle}
          </h2>
          <RegistrationForm setStep={setStep} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;
