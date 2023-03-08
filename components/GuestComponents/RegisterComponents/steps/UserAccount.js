import React, {useState} from "react";
import {MdAlternateEmail} from "react-icons/md";
import {AiOutlineDown, AiFillEyeInvisible} from "react-icons/ai";
import Label from "../inputsComponents/Label";
import Input from "../inputsComponents/Input";
import ToolTip from "../inputsComponents/ToolTip";
function UserAccount({setTypeOfUser}) {
  const [show, setShow] = useState({password: false, confirmPassword: false});
  const handleShow = (name) => {
    if (name === "confirmPassword") {
      setShow({...show, confirmPassword: !show.confirmPassword});
    } else {
      setShow({...show, password: !show.password});
    }
  };
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState([]);
  const handleChange = () => {};
  const [error, setError] = useState(true);
  return (
    <div className="h-full w-full flex justify-center">
      <form className="flex flex-col w-full md:w-4/5">
        {/* E-mail */}
        <div className="relative flex items-center border rounded-lg mt-10">
          <Input
            handleChange={handleChange}
            type="text"
            name="email"
            touched={touched}
            setTouched={setTouched}
          />
          <Label htmlFor="email" text="E-mail Address" />
          <div className="w-[3px] h-7 bg-gray" />
          <ToolTip
            name="email"
            icon={<MdAlternateEmail size={25} className="text-[#1A2A34]" />}
            errors={errors}
            touched={touched.find((obj) => obj["email"] === true)?.["email"]}
          />
        </div>
        {/* Password */}
        <div className="relative flex items-center border rounded-lg mt-8">
          <Input
            handleChange={handleChange}
            type={show.password ? "text" : "password"}
            name="password"
            touched={touched}
            setTouched={setTouched}
          />
          <Label htmlFor="password" text="Password" />
          <div className="w-[3px] h-7 bg-gray" />
          <ToolTip
            name="password"
            icon={<AiFillEyeInvisible size={25} className="text-[#1A2A34]" />}
            errors={errors}
            handleShow={handleShow}
            touched={touched.find((obj) => obj["password"] === true)?.["password"]}
          />
        </div>
        {/* Confirm Password */}
        <div className="relative flex items-center border rounded-lg mt-8">
          <Input
            handleChange={handleChange}
            type={show.confirmPassword ? "text" : "password"}
            name="confirmPassword"
          />
          <Label htmlFor="confirmPassword" text="Confirm Password" />
          <div className="w-[3px] h-7 bg-gray" />
          <ToolTip
            name="confirmPassword"
            icon={<AiFillEyeInvisible size={25} className="text-[#1A2A34]" />}
            errors={errors}
            handleShow={handleShow}
            touched={touched.find((obj) => obj["confirmPassword"] === true)?.["confirmPassword"]}
          />
        </div>
        {/* Account Type */}
        <div className="relative flex items-center justify-between border rounded-lg py-2 my-4 mt-8">
          <select
            id="type"
            className="block px-2.5 w-full text-sm text-gray-500 bg-transparent rounded-lg focus:outline-none focus:ring-0 peer leading-8 uppercase appearance-none absolute top-0 bottom-0 left-0 right-0"
            name="type"
            required
            onChange={(e) => setTypeOfUser(e.target.value)}
          >
            <option defaultValue>Choose a type of user account</option>
            <option value="Individual">Individual</option>
            <option value="Company">Company</option>
            <option value="PublicInstitution">Public Institution</option>
          </select>
          <div className="opacity-0" />
          <div className="flex items-center">
            <div className="w-0.5 h-7 bg-gray" />
            <ToolTip
              name="type"
              icon={<AiOutlineDown size={25} className="text-[#1A2A34]" />}
              errors={errors}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserAccount;
