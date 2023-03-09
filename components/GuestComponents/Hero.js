import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-screen w-screen p-3 md:p-5 ">
      <div className="font-secondary font-bold text-white  md:text-4xl tracking-wider">
        <h2 className=" text-3xl">Your solution for reducing</h2>
        <p className="text-2xl">bureaucracy and simplifying your daily tasks</p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[250px] md:mt-0">
        <div className=" space-y-8  ">
          <div className=" font-secondary font-bold text-white text-xl text-center tracking-widest">
            <p>
              We understand how frustrating it can be to navigate through
              endless paperwork and
            </p>{" "}
            bureaucratic red tape, which is why we're here to help.
            <p></p>
          </div>

          <button className=" text-secondary bg-white py-3 px-20 rounded-md font-bold text-lg ">
            <Link href="/" />
            GET STARTED
          </button>
        </div>
        <div className=" absolute top-[120px]  right-[0px] md:relative w-[320px] h-[340px]  md:w-[800px] md:h-[800px] ">
          <Image src="/assets/main/Documents-bro.png" alt="imagine-hero" fill />
        </div>
      </div>
    </div>
  );
}

export default Hero;
//test 11111
