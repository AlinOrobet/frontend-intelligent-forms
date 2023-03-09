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
function UserDetails({stepHaveErrors, setStepHaveErrors}) {
  const [errors, setErrors] = useState({});
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData}, (userData.UserDetails[name] = value));
    let errors_var = userDetails_validate(userData);
    setErrors(errors_var);
  };
  useEffect(() => {
    const handleChangeStepHaveErrors = () => {
      if (Object.keys(errors).length === 0) {
        setStepHaveErrors(false);
      } else {
        setStepHaveErrors(true);
      }
    };
    let errors_var = userDetails_validate(userData);
    setErrors(errors_var);
    handleChangeStepHaveErrors();
  }, [errors]);
  return (
    <div className="h-full w-full flex justify-center">
      <form className="flex flex-col w-full md:w-4/5">
        {/* Entity Name */}
        <div className="mt-8">
          <div
            className={`flex items-center mb-1 space-x-1 md:space-x-2 ${
              errors["entityNameU"] ? "opacity-100 text-alert" : "opacity-0"
            }`}
          >
            <FiAlertTriangle size={20} />
            <p className="text-xs md:text-sm">{errors["entityNameU"] || "err"}</p>
          </div>
          <div
            className={`relative flex items-center border  ${
              errors["entityNameU"] ? "border-alert" : "border-button"
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
              errors["institutionName"] ? "opacity-100 text-alert" : "opacity-0"
            }`}
          >
            <FiAlertTriangle size={20} />
            <p className="text-xs md:text-sm">{errors["institutionName"] || "err"}</p>
          </div>
          <div
            className={`relative flex items-center border  ${
              errors["institutionName"] ? "border-alert" : "border-button"
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
                errors["addressU"] ? "opacity-100 text-alert" : "opacity-0"
              }`}
            >
              <FiAlertTriangle size={20} />
              <p className="text-xs md:text-sm">{errors["addressU"] || "err"}</p>
            </div>
            <div
              className={`relative flex items-center border  ${
                errors["addressU"] ? "border-alert" : "border-button"
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
              errors["typeOfSubscriptionU"] ? "opacity-100 text-alert" : "opacity-0"
            }`}
          >
            <FiAlertTriangle size={20} />
            <p className="text-xs md:text-sm">{errors["typeOfSubscriptionU"] || "err"}</p>
          </div>
          <div
            className={`relative flex items-center justify-between border  ${
              errors["typeOfSubscriptionU"] ? "border-alert" : "border-button"
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
