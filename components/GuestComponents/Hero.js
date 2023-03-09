import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-full w-full p-3 md:p-5 lg:px-10">
      <h2 className=" text-3xl font-secondary font-bold text-white  md:text-4xl tracking-wider md:leading-normal lg:text-5xl lg:leading-normal ">
        Your solution for reducing bureaucracy and simplifying your daily tasks
      </h2>

      {/* imag + inner block */}
      <div className="grid grid-rows-2 md:grid-cols-2 justify-between  mt-[280px] md:mt-10 lg:items-center lg:justify-center">
        {/* WE understand + button inner block */}
        <div className=" space-y-10 md:pr-10 ">
          {/* We understand part */}
          <div className=" font-secondary font-bold text-white text-xl text-center tracking-widest md:text-left lg:text-2xl">
            <p>
              We understand how frustrating it can be to navigate through
              endless paperwork and
            </p>{" "}
            bureaucratic red tape, which is why we're here to help.
            <p></p>
          </div>
          {/* GET STARTED */}
          <button className=" text-secondary bg-white py-3 px-[100px] rounded-md font-bold text-lg block m-auto shadow-2xl md:m-0 md:px-[60px] lg:py-1 ">
            <Link href="/" />
            GET STARTED
          </button>
        </div>
        <div className=" absolute top-[120px]   right-[0px]  w-[320px] h-[360px]  md:w-[440px] md:h-[480px]  md:top-[80px] lg:h-[600px] lg:w-[550px]  ">
          <Image src="/assets/main/hero-img.png" alt="imagine-hero" fill />
        </div>
      </div>
    </div>
  );
}

export default Hero;
//test 11111
