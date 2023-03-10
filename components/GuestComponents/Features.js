import React from "react";
import Image from "next/image";
function Features() {
  return (
    <div className="h-full w-full px-5 md:p-7 lg:px-10 text-white font-secondary font-bold space-y-5 relative max-w-[1200px] m-auto ">
      <h2 className="text-2xl">Features</h2>
      <div className="md:flex">
        <div className="md:flex-col md:space-y-5 md:border-r-4 relative">
          <p className="text-xl  px-7 text-center md:px-[70px] ">
            Create an account on our website so you can enjoy the perks of it.
          </p>
          <div className="flex flex-row-reverse text-lg items-center md:flex-col md:space-y-5">
            <div className="relative w-[200px] h-[200px] ">
              <Image src="/assets/main/tasta-ft.png" fill />
            </div>
            <p className=" text-right w-[130px] md:w-auto   md:px-[50px] md:text-center">
              Retrieve completed forms from users with the click of a button.
            </p>
          </div>
          {/* pointing circle */}
          <div className="hidden flex absolute right-[-73px] top-0 items-center z-10">
            <div className="block p-4 rounded-full bg-white"></div>
            <div className=" text-sm  ">- - - - - - - - </div>
            <div className="block p-2 rounded-full border-2"></div>
          </div>
          {/* endof pointing circle */}
        </div>
        <div className=" md:flex-row-reverse">
          <div className="flex items-center md:flex-col">
            <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] md:absolute md:-top-5 ">
              <Image src="/assets/main/create-ft.png" fill />
            </div>
            <p className="text-lg  text-left w-[120px] md:w-auto md:text-center md:mt-[160px]  md:px-[70px]">
              Easily create a form using our form creation page and wait for
              people to complete it.
            </p>
          </div>
          <div>
            <p className="text-xl text-center md:text-center md:mt-[30px] md:px-[60px]">
              If you are looking to complete a form, enter the URL here
            </p>
            <div>
              <label className=""></label>
              <input
                placeholder="form URL"
                type="text"
                id="searchURL"
                className="block w-[300px] mx-auto mt-4 py-1 rounded-md text-black px-2"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
