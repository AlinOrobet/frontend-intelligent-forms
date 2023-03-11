import React, {useState, useEffect} from "react";
import {useContext} from "react";
import {StepperContext} from "../../../../contexts/StepperContext";
import {userDetails_validate} from "../../../../lib/validations";
import Label from "../inputsComponents/Label";
import Input from "../inputsComponents/Input";
import ToolTip from "../inputsComponents/ToolTip";
import {AiOutlineDown, AiFillInfoCircle} from "react-icons/ai";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {FiAlertTriangle} from "react-icons/fi";
function UserDetails({setStepHaveErrors}) {
  const {userData, setUserData, errors, setErrors} = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData}, (userData.UserDetails[name] = value));
    setErrors((prevState) => ({
      ...prevState,
      UserDetails: {
        ...prevState.UserDetails,
        [name]: userDetails_validate(name, userData),
      },
    }));
  };
  useEffect(() => {
    const handleChangeStepHaveErrors = () => {
      for (let key in errors.UserDetails) {
        if (errors.UserDetails[key] !== "") {
          return true;
        }
      }
      return false;
    };
    setStepHaveErrors(handleChangeStepHaveErrors());
  }, [errors]);
  return (
    <div className="h-full w-full flex justify-center">
      <form className="flex flex-col w-full md:w-4/5">
        {/* Entity Name */}
        <div className="mt-8">
          <div
            className={`flex items-center mb-1 space-x-1 md:space-x-2 ${
              errors.UserDetails?.entityName ? "opacity-100 text-alert" : "opacity-0"
            }`}
          >
            <FiAlertTriangle size={20} />
            <p className="text-xs md:text-sm">{errors.UserDetails?.entityName || "err"}</p>
          </div>
          <div
            className={`relative flex items-center border  ${
              errors.UserDetails?.entityName ? "border-alert" : "border-button"
            } rounded-lg`}
          >
            <Input
              handleChange={handleChange}
              type="text"
              name="entityName"
              value={userData.UserDetails.entityName}
            />
            <Label htmlFor="entityName" text="Entity Name" />
            <div className="hidden md:inline w-[2px] h-7 bg-button" />
            <ToolTip
              name="entityName"
              icon={<AiFillInfoCircle size={25} className="text-button" />}
            />
          </div>
        </div>
        {/* Institution Name */}
        <div className="mt-2">
          <div
            className={`flex items-center mb-1 space-x-1 md:space-x-2 ${
              errors.UserDetails?.institutionName ? "opacity-100 text-alert" : "opacity-0"
            }`}
          >
            <FiAlertTriangle size={20} />
            <p className="text-xs md:text-sm">{errors.UserDetails?.institutionName || "err"}</p>
          </div>
          <div
            className={`relative flex items-center border  ${
              errors.UserDetails?.institutionName ? "border-alert" : "border-button"
            } rounded-lg`}
          >
            <Input
              handleChange={handleChange}
              type="text"
              name="institutionName"
              value={userData.UserDetails.institutionName}
            />
            <Label htmlFor="institutionName" text="Institution Name (optional)" />
            <div className="hidden md:inline w-[2px] h-7 bg-button" />
            <ToolTip
              name="institutionName"
              icon={<AiFillInfoCircle size={25} className="text-button" />}
            />
          </div>
          {/* ADDRESS */}
          <div className="mt-2">
            <div
              className={`flex items-center mb-1 space-x-1 md:space-x-2 ${
                errors.UserDetails?.address ? "opacity-100 text-alert" : "opacity-0"
              }`}
            >
              <FiAlertTriangle size={20} />
              <p className="text-xs md:text-sm">{errors.UserDetails?.address || "err"}</p>
            </div>
            <div
              className={`relative flex items-center border  ${
                errors.UserDetails?.address ? "border-alert" : "border-button"
              } rounded-lg`}
            >
              <Input
                handleChange={handleChange}
                type="text"
                name="address"
                value={userData.UserDetails.address}
              />
              <Label htmlFor="address" text="Address" />
              <div className="hidden md:inline w-[2px] h-7 bg-button" />
              <ToolTip
                name="address"
                icon={<HiOutlineLocationMarker size={25} className="text-button" />}
              />
            </div>
          </div>
        </div>
        {/* Subscription Type */}
        <div className="mt-2">
          <div
            className={`flex items-center space-x-1 md:space-x-2 ${
              errors.UserDetails?.typeOfSubscription ? "opacity-100 text-alert" : "opacity-0"
            }`}
          >
            <FiAlertTriangle size={20} />
            <p className="text-xs md:text-sm">{errors.UserDetails?.typeOfSubscription || "err"}</p>
          </div>
          <div
            className={`relative flex items-center justify-between border  ${
              errors.UserDetails?.typeOfSubscription ? "border-alert" : "border-button"
            } rounded-lg py-1.5 lg:py-2.5 text-xs md:text-sm`}
          >
            <select
              id="typeOfSubscription"
              className="block px-2 appearance-none text-third font-semibold font-secondary uppercase bg-transparent focus:outline-none leading-8 absolute top-0 bottom-0 left-0 right-0"
              name="typeOfSubscription"
              required
              onChange={(e) => handleChange(e)}
            >
              <option defaultValue>
                {userData.UserDetails.typeOfSubscription || "Choose a type of subscription"}
              </option>
              <option value="Free">Free</option>
              <option value="Basic">Basic</option>
              <option value="Pro">Pro</option>
            </select>
            <div className="opacity-0" />
            <div className="flex items-center">
              <div className="hidden md:inline w-[2px] h-7 bg-button" />
              <ToolTip
                name="typeOfSubscription"
                icon={<AiOutlineDown size={25} className="text-button" />}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserDetails;
