import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section
      className="h-screen w-screen p-5 md:p-7 lg:px-10 font-secondary font-bold text-primary "
      id="#hero"
    >
      <h2 className=" text-4xl  md:text-4xl lg:text-5xl  ">
        Your solution for reducing bureaucracy and simplifying your daily tasks
      </h2>

      {/* imag + inner block */}
      <div className="grid gap-10 justify-center pt-5">
        {/* WE understand + button inner block */}

        {/* We understand part */}

        <p className=" text-2xl text-center md:text-left lg:text-2xl lg:mr-[50px] row-start-2">
          We understand how frustrating it can be to navigate through endless
          paperwork and bureaucratic red tape, which is why we're here to help.
        </p>

        {/* GET STARTED button*/}
        <button className=" row-start-3 text-secondary bg-primary py-3 mt-5 rounded-md  text-xl  shadow-2xl  ">
          <Link href="/" />
          GET STARTED
        </button>

        <div className="relative w-[340px] h-[220px] row-start-1 ">
          <Image src="/assets/main/hero.png" alt="imagine-hero" fill />
        </div>
      </div>
    </section>
  );
}

export default Hero;
//test 11111
