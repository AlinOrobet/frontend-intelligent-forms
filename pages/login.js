import React, {useState} from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import MainLayout from "../layout/MainLayout";
import {FiAlertTriangle} from "react-icons/fi";
import {MdAlternateEmail} from "react-icons/md";
import {AiFillEyeInvisible} from "react-icons/ai";
import Input from "../components/GuestComponents/RegisterComponents/inputsComponents/Input";
import Label from "../components/GuestComponents/RegisterComponents/inputsComponents/Label";
import ToolTip from "../components/GuestComponents/RegisterComponents/inputsComponents/ToolTip";
function Login() {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({email: undefined, password: undefined});
  const handleShow = (name) => {
    setShow(!show);
  };
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <MainLayout activeLink="signin">
      <div className="flex-grow flex rounded-xl shadow-2xl bg-white m-3 lg:mx-14">
        <div className="font-secondary hidden lg:flex flex-col items-center w-2/5 py-10">
          <div className="flex flex-col items-center z-10">
            <h1 className="text-4xl font-extrabold mb-1 text-third font-secondary">
              Welcome back!
            </h1>
            <p className="text-center text-lg font-bold w-4/5 text-third font-secondary">
              Log in to continue.
            </p>
          </div>
          <div className={`relative w-2/3 h-full scale-x-[-1]`}>
            <Image
              src="/assets/register/login_0.png"
              alt="login_picture"
              layout="fill"
              objectFit="cover"
              priority
              sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col items-center justify-center shadow-2xl px-4 p-10">
          <h2 className="text-5xl font-secondary text-center font-extrabold text-third font-secondary">
            Login
          </h2>
          <div className="w-full md:w-4/5 pb-4 md:pb-4">
            <form className="flex flex-col">
              {/* E-mail*/}
              <div className="mt-8">
                <div
                  className={`flex items-center mb-1 space-x-1 md:space-x-2 ${
                    errors?.email ? "opacity-100 text-alert" : "opacity-0"
                  }`}
                >
                  <FiAlertTriangle size={20} />
                  <p className="text-xs md:text-sm">{errors?.email || "err"}</p>
                </div>

                <div
                  className={`relative flex items-center border ${
                    errors?.email ? "border-alert" : "border-button"
                  }  rounded-lg`}
                >
                  <Input handleChange={handleChange} type="text" name="email" />
                  <Label htmlFor="email" text="E-mail Address" />
                  <div className="hidden md:inline w-[2px] h-7 bg-button" />
                  <ToolTip
                    name="email"
                    icon={<MdAlternateEmail size={25} className="text-button" />}
                  />
                </div>
              </div>
              {/* Password */}
              <div className="mt-4">
                <div
                  className={`flex items-center mb-1 space-x-1 md:space-x-2 ${
                    errors?.password ? "opacity-100 text-alert" : "opacity-0"
                  }`}
                >
                  <FiAlertTriangle size={20} />
                  <p className="text-xs md:text-sm">{errors?.password || "err"}</p>
                </div>

                <div
                  className={`relative flex items-center border ${
                    errors?.password ? "border-alert" : "border-button"
                  }  rounded-lg`}
                >
                  <Input
                    handleChange={handleChange}
                    type={show ? "text" : "password"}
                    name="password"
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
              <div className="flex items-center h-full mt-3 mx-2">
                <label htmlFor="rememberMe" className="relative flex items-center space-x-2">
                  <input id="rememberMe" type="checkbox" value="true" className="rounded w-5 h-5" />
                  <span className="mt-[3px] text-sm font-secondary font-bold text-third uppercase">
                    Remember me
                  </span>
                </label>
              </div>
              <div className="flex flex-col items-center">
                {/* Login button */}
                <button
                  onClick={handleSubmit}
                  className="w-1/2 md:w-1/4 bg-button py-2 text-primary font-secondary font-bold rounded-md  my-5"
                >
                  Login
                </button>
                {/* Forgot password */}
                <div className="flex flex-col items-center font-secondary font-semibold uppercase text-xs md:text-sm">
                  <p className="text-third">Forgot your login details?</p>
                  <Link href="/#contact">
                    <p className="text-button underline cursor-pointer">get help signing in</p>
                  </Link>
                  <p className="text-button font-bold font-secondary mt-3 md:mt-6">
                    Don`t have an account?
                    <Link href="/register">
                      <span className="ml-2 underline cursor-pointer">sign in</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;
