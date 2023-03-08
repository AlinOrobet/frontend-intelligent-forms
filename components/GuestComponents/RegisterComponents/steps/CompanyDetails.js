import React, {useState} from "react";
import Label from "../inputsComponents/Label";
import Input from "../inputsComponents/Input";
import ToolTip from "../inputsComponents/ToolTip";
import {AiOutlineDown, AiFillInfoCircle} from "react-icons/ai";
import {HiOutlineLocationMarker} from "react-icons/hi";
function CompanyDetails() {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState([]);
  const handleChange = () => {};
  return (
    <div className="h-full w-full flex justify-center">
      <form className="flex flex-col w-full md:w-4/5">
        {/* Entity Name */}
        <div className="relative flex items-center border rounded-lg mt-10">
          <Input
            handleChange={handleChange}
            type="text"
            name="entityName"
            touched={touched}
            setTouched={setTouched}
          />
          <Label htmlFor="entityName" text="Entity Name" />
          <div className="w-[3px] h-7 bg-gray" />
          <ToolTip
            name="entityName"
            icon={<AiFillInfoCircle size={25} className="text-[#1A2A34]" />}
            errors={errors}
            touched={touched.find((obj) => obj["entityName"] === true)?.["entityName"]}
          />
        </div>
        {/* Fiscal Code */}
        <div className="relative flex items-center border rounded-lg mt-8">
          <Input
            handleChange={handleChange}
            type="text"
            name="fiscalCode"
            touched={touched}
            setTouched={setTouched}
          />
          <Label htmlFor="fiscalCode" text="Fiscal Code" />
          <div className="w-[3px] h-7 bg-gray" />
          <ToolTip
            name="fiscalCode"
            icon={<AiFillInfoCircle size={25} className="text-[#1A2A34]" />}
            errors={errors}
            touched={touched.find((obj) => obj["fiscalCode"] === true)?.["fiscalCode"]}
          />
        </div>
        {/* ADDRESS */}
        <div className="relative flex items-center border rounded-lg mt-8">
          <Input
            handleChange={handleChange}
            type="text"
            name="address"
            touched={touched}
            setTouched={setTouched}
          />
          <Label htmlFor="address" text="Address" />
          <div className="w-[3px] h-7 bg-gray" />
          <ToolTip
            name="address"
            icon={<HiOutlineLocationMarker size={25} className="text-[#1A2A34]" />}
            errors={errors}
            touched={touched.find((obj) => obj["address"] === true)?.["address"]}
          />
        </div>
        {/* Subscription Type */}
        <div className="relative flex items-center justify-between border rounded-lg py-2 my-4 mt-8">
          <select
            id="type"
            className="block px-2.5 w-full text-sm text-gray-500 bg-transparent rounded-lg focus:outline-none focus:ring-0 peer leading-8 uppercase appearance-none absolute top-0 bottom-0 left-0 right-0"
            name="type"
            required
            onChange={(e) => setTypeOfUser(e.target.value)}
          >
            <option defaultValue>Choose a type of subscription</option>
            <option value="Free">Free</option>
            <option value="Basic">Basic</option>
            <option value="Pro">Pro</option>
          </select>
          <div className="opacity-0" />
          <div className="flex items-center">
            <div className="w-[2px] h-7 bg-gray" />
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

export default CompanyDetails;
