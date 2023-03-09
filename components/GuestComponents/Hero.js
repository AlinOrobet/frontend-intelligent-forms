import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-screen w-screen p-3 md:p-5 ">
      <h2 className=" font-secondary font-bold text-white text-3xl md:text-4xl tracking-wide ">
        Your solution for reducing bureaucracy and simplifying your daily tasks
      </h2>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[200px] md:mt-0">
        <div className=" space-y-4">
          <p className=" font-secondary font-bold text-white text-lg text-center ">
            We understand how frustrating it can be to navigate through endless
            paperwork and bureaucratic red tape, which is why we're here to
            help.
          </p>
          <button className="text-secondary bg-white py-3 px-[125px] rounded-md font-bold text-lg">
            <Link href="/" />
            GET STARTED
          </button>
        </div>
        <div className=" absolute top-[120px]  right-[0px] md:relative w-[300px] h-[300px]  md:w-[800px] md:h-[800px] ">
          <Image src="/assets/main/Documents-bro.png" alt="imagine-hero" fill />
        </div>
      </div>
    </div>
  );
}

export default Hero;
//test 11111
