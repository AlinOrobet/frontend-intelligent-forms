import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section
      className="h-screen w-screen p-5 md:p-7 lg:px-10 font-secondary font-bold text-primary relative overflow-hidden "
      id="hero"
    >
      <h2 className=" text-4xl md:text-5xl  ">
        Your solution for reducing bureaucracy and simplifying your daily tasks
      </h2>

      {/* imag + inner block */}
      <div className="grid gap-10 md:gap-10 lg:gap-0 justify-center pt-5 md:pt-10 lg:grid-cols-3 ">
        {/* WE understand + button inner block */}

        {/* We understand part */}

        <p className=" text-2xl md:text-3xl text-center lg:text-left  row-start-2 md:row-start-1 lg:flex lg:items-center    ">
          We understand how frustrating it can be to navigate through endless
          paperwork and bureaucratic red tape, which is why we're here to help.
        </p>

        {/* GET STARTED button*/}
        <button className="  text-secondary font-secondary bg-primary py-2 lg:py-1 mt-5 rounded-md  text-2xl  shadow-2xl row-start-3 md:row-start-2  md:w-[200px]  md:m-auto lg:ml-0   transition ease-in-out delay-150  hover:scale-110 hover:bg-slate-300  duration-500 ">
          <Link href="/" />
          GET STARTED
        </button>

        <div className="relative w-[340px] h-[220px] md:h-[500px] md:w-[700px] lg:w-[800px] lg:h-[550px] row-start-1 md:row-start-3 lg:row-start-1 lg:col-span-2 lg:row-span-2 m-auto   ">
          <Image src="/assets/main/hero.png" alt="imagine-hero" fill />
        </div>
      </div>
    </section>
  );
}

export default Hero;
//test 11111
