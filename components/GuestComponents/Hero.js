import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-screen w-full p-5 md:p-7 lg:px-10 font-secondary font-bold text-white   ">
      <h2 className=" text-3xl  md:text-4xl lg:text-5xl  ">
        Your solution for reducing bureaucracy and simplifying your daily tasks
      </h2>

      {/* imag + inner block */}
      <div className=" flex flex-col-reverse  items-center justify-center">
        {/* WE understand + button inner block */}
        <div className=" space-y-10 md:pr-8 ">
          {/* We understand part */}

          <p className=" text-xl text-center md:text-left lg:text-2xl lg:mr-[50px]">
            We understand how frustrating it can be to navigate through endless
            paperwork and bureaucratic red tape, which is why we're here to
            help.
          </p>

          {/* GET STARTED */}
          <button className=" text-secondary bg-white py-3 px-[90px]  rounded-md font-bold text-lg block m-auto shadow-2xl md:m-0 md:px-[60px] lg:py-1 hover:scale-110 active:scale-90 ">
            <Link href="/" />
            GET STARTED
          </button>
        </div>
        <div className="relative w-[380px] h-[260px] ">
          <Image src="/assets/main/hero.png" alt="imagine-hero" fill />
        </div>
      </div>
    </div>
  );
}

export default Hero;
//test 11111
