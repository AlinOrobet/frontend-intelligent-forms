import React from "react";
import Image from "next/image";
function Features() {
  return (
    <section
      className="h-full w-full px-5 md:px-7 lg:px-20 text-white font-secondary font-bold relative overflow-x-hidden"
      id="features"
    >
      <h1 className="text-2xl md:text-3xl">Features</h1>
      {/* container all */}
      <div className="pt-5  grid grid-cols-3 md:grid-cols-5 gap-2  md:gap-0 ">
        {/* middle bar on bigger screens */}

        <div className="hidden md:inline col-start-3 row-span-4 h-full w-2 bg-primary rounded-xl m-auto relative">
          {" "}
          {/* DOt 1 */}
          <div className=" flex absolute top-[10px] left-[-11px] items-center">
            <div className="rounded-full p-4 bg-primary "></div>
            <div className="w-10 py-[2px] px-10 bg-primary xxl:w-[200px]"></div>
            <div className="rounded-full w-4 h-4 border-2"></div>
          </div>
          {/* DOT 2 */}
          <div className=" flex absolute top-[210px] md:left-[-108px] xxl:left-[-228px] items-center">
            <div className="rounded-full w-4 h-4 border-2"></div>
            <div className="w-10 py-[2px] px-10 bg-primary xxl:w-[200px]"></div>
            <div className="rounded-full p-4 bg-primary "></div>
          </div>
          {/* DOT 3 */}
          <div className=" flex absolute bottom-[10px] left-[-11px] items-center">
            <div className="rounded-full p-4 bg-primary "></div>
            <div className="w-10 py-[2px] px-10 bg-primary xxl:w-[200px]"></div>
            <div className="rounded-full w-4 h-4 border-2"></div>
          </div>
        </div>

        {/* end of middle bar */}
        <p className=" flex items-center justify-center text-2xl col-span-3 text-center md:text-xl  md:col-span-2 md:row-start-1  md:px-6   ">
          Create an account on our website so you can enjoy the perks of it.
        </p>
        <p className="flex items-center justify-center text-xl text-right md:row-start-3 md:col-span-2 md:mt-5  ">
          Retrieve completed forms from users with the click of a button.
        </p>

        <div className="flex items-center justify-center relative h-[200px] w-[200px] ml-5 md:m-auto md:row-start-2 md:col-span-2   ">
          <Image src="/assets/main/tasta-ft.png" fill />
        </div>
        <div className="relative h-[100px] w-[180px] md:h-[140px] md:w-[260px] m-auto row-start-3 md:col-start-4 md:row-start-1 md:col-span-2 ">
          <Image src="/assets/main/pushing.png" fill />
        </div>
        <p className="text-xl flex items-center row-start-3 col-span-2 ml-[70px] md:ml-0 md:col-span-2 md:col-start-4 md:row-start-2 md:text-center md:justify-center  ">
          Easily create a form using our form creation page and wait for people
          to complete it.
        </p>
        <p className="col-span-3 text-2xl md:text-xl text-center md:col-span-2 md:col-start-4 md:row-start-3">
          If you are looking to complete a form, enter the URL here:{" "}
        </p>
        <div className="col-span-3 md:col-span-2 md:col-start-4 md:row-start-4">
          <label></label>
          <input
            placeholder="form URL"
            className="p-2 w-full md:w-[280px] rounded-md mt-3 md:flex md:m-auto text-third "
          ></input>
        </div>
      </div>
    </section>
  );
}

export default Features;
