import React, {useEffect} from "react";
import {useContext} from "react";
import {StepperContext} from "../../../../contexts/StepperContext";
import {userDetails_validate} from "../../../../lib/validations";
import {selectDataTypeOfSubscriptions} from "../../../../data/ResgisterData";
import Label from "../inputsComponents/Label";
import Input from "../inputsComponents/Input";
import ToolTip from "../inputsComponents/ToolTip";
import Select from "../inputsComponents/Select";
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
                errors.UserDetails?.entityAddress ? "opacity-100 text-alert" : "opacity-0"
              }`}
            >
              <FiAlertTriangle size={20} />
              <p className="text-xs md:text-sm">{errors.UserDetails?.entityAddress || "err"}</p>
            </div>
            <div
              className={`relative flex items-center border  ${
                errors.UserDetails?.entityAddress ? "border-alert" : "border-button"
              } rounded-lg`}
            >
              <Input
                handleChange={handleChange}
                type="text"
                name="entityAddress"
                value={userData.UserDetails.entityAddress}
              />
              <Label htmlFor="entityAddress" text="Address" />
              <div className="hidden md:inline w-[2px] h-7 bg-button" />
              <ToolTip
                name="entityAddress"
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
            <Select
              selectData={selectDataTypeOfSubscriptions}
              name="typeOfSubscription"
              value={userData.UserDetails.typeOfSubscription}
              handleChange={handleChange}
            />
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
