import React, {useState, useEffect} from "react";
import {useContext} from "react";
import {StepperContext} from "../../../../contexts/StepperContext";
import {userAccount_validate} from "../../../../lib/validations";
import Label from "../inputsComponents/Label";
import Input from "../inputsComponents/Input";
import ToolTip from "../inputsComponents/ToolTip";
import {MdAlternateEmail} from "react-icons/md";
import {AiOutlineDown, AiFillEyeInvisible} from "react-icons/ai";
import {FiAlertTriangle} from "react-icons/fi";
function UserAccount({setTypeOfUser, setStepHaveErrors}) {
  const [show, setShow] = useState({password: false, confirmPassword: false});
  const handleShow = (name) => {
    if (name === "confirmPassword") {
      setShow({...show, confirmPassword: !show.confirmPassword});
    } else {
      setShow({...show, password: !show.password});
    }
  };
  const {userData, setUserData, errors, setErrors} = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData}, (userData.UserAccount[name] = value));
    setErrors((prevState) => ({
      ...prevState,
      UserAccount: {
        ...prevState.UserAccount,
        [name]: userAccount_validate(name, userData),
      },
    }));
  };
  useEffect(() => {
    const handleChangeStepHaveErrors = () => {
      for (let key in errors.UserAccount) {
        if (errors.UserAccount[key] !== "") {
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
        {/* E-mail errors.errors_var */}
        <div className="mt-8">
          <div
            className={`flex items-center mb-1 space-x-1 md:space-x-2 ${
              errors.UserAccount?.email ? "opacity-100 text-alert" : "opacity-0"
            }`}
          >
            <FiAlertTriangle size={20} />
            <p className="text-xs md:text-sm">{errors.UserAccount?.email || "err"}</p>
          </div>
          <div
            className={`relative flex items-center border ${
              errors.UserAccount?.email ? "border-alert" : "border-button"
            }  rounded-lg`}
          >
            <Input
              handleChange={handleChange}
              type="text"
              name="email"
              value={userData.UserAccount.email}
            />
            <Label htmlFor="email" text="E-mail Address" />
            <div className="hidden md:inline w-[2px] h-7 bg-button" />
            <ToolTip name="email" icon={<MdAlternateEmail size={25} className="text-button" />} />
          </div>
        </div>

        {/* Password */}
        <div className="mt-2">
          <div
            className={`flex items-center mb-1 space-x-1 md:space-x-2 ${
              errors.UserAccount?.password ? "opacity-100 text-alert" : "opacity-0"
            }`}
          >
            <FiAlertTriangle size={20} />
            <p className="text-xs md:text-sm">{errors.UserAccount?.password || "err"}</p>
          </div>
          <div
            className={`relative flex items-center border ${
              errors.UserAccount?.password ? "border-alert" : "border-button"
            }  rounded-lg`}
          >
            <Input
              handleChange={handleChange}
              type={show.password ? "text" : "password"}
              name="password"
              value={userData.UserAccount.password}
            />
            <Label htmlFor="password" text="Password" />
            <div className="hidden md:inline w-[2px] h-7 bg-button" />
            <ToolTip
              name="password"
              icon={<AiFillEyeInvisible size={25} className="text-button" />}
              handleShow={handleShow}
            />
          </div>
        </div>
        {/* Confirm Password */}
        <div className="mt-2">
          <div
            className={`flex items-center mb-1 space-x-1 md:space-x-2 ${
              errors.UserAccount?.confirmPassword ? "opacity-100 text-alert" : "opacity-0"
            }`}
          >
            <FiAlertTriangle size={20} />
            <p className="text-xs md:text-sm">{errors.UserAccount?.confirmPassword || "err"}</p>
          </div>
          <div
            className={`relative flex items-center border  ${
              errors.UserAccount?.confirmPassword ? "border-alert" : "border-button"
            } rounded-lg`}
          >
            <Input
              handleChange={handleChange}
              type={show.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={userData.UserAccount.confirmPassword}
            />
            <Label htmlFor="confirmPassword" text="Confirm Password" />
            <div className="hidden md:inline w-[2px] h-7 bg-button" />
            <ToolTip
              name="confirmPassword"
              icon={<AiFillEyeInvisible size={25} className="text-button" />}
              handleShow={handleShow}
            />
          </div>
        </div>
        {/* Account Type */}
        <div className="mt-2">
          <div
            className={`flex items-center space-x-1 md:space-x-2 ${
              errors.UserAccount?.typeOfUser ? "opacity-100 text-alert" : "opacity-0"
            }`}
          >
            <FiAlertTriangle size={20} />
            <p className="text-xs md:text-sm">{errors.UserAccount?.typeOfUser || "err"}</p>
          </div>
          <div
            className={`relative flex items-center justify-between border  ${
              errors.UserAccount?.typeOfUser ? "border-alert" : "border-button"
            } rounded-lg py-1.5 lg:py-2.5 text-xs md:text-sm`}
          >
            <select
              id="typeOfUser"
              className="block px-2 appearance-none text-third font-semibold font-secondary uppercase bg-transparent focus:outline-none leading-8 absolute top-0 bottom-0 left-0 right-0"
              name="typeOfUser"
              required
              onChange={(e) => {
                setTypeOfUser(e.target.value);
                handleChange(e);
              }}
            >
              <option defaultValue>
                {userData.UserAccount.typeOfUser || "Choose a type of account"}
              </option>
              <option value="Individual">Individual</option>
              <option value="Company">Company</option>
              <option value="PublicInstitution">Public Institution</option>
            </select>
            <div className="opacity-0" />
            <div className="flex items-center">
              <div className="hidden md:inline w-[2px] h-7 bg-button" />
              <ToolTip
                name="typeOfUser"
                icon={<AiOutlineDown size={25} className="text-button" />}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserAccount;
