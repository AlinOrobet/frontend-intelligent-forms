import React from "react";
import Image from "next/image";
function Features() {
  return (
    <div className="h-full w-full px-5 md:p-7 lg:px-10 text-white font-secondary font-bold space-y-5">
      <h2 className="text-2xl">Features</h2>
      <div>
        <div>
          <p className="text-xl  px-7 text-center">
            Create an account on our website so you can enjoy the perks of it.
          </p>
          <div className="flex flex-row-reverse text-lg items-center ">
            <div className="relative w-[800px] h-[200px] ">
              <Image src="/assets/main/tasta-ft.png" fill />
            </div>
            <p className=" text-right pr-5 ">
              Retrieve completed forms from users with the click of a button.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative w-[900px] h-[200px] ">
            <Image src="/assets/main/create-ft.png" fill />
          </div>
          <p className="text-lg  text-left ">
            Easily create a form using our form creation page and wait for
            people to complete it.
          </p>
        </div>
        <div>
          <p className="text-xl text-center">
            If you are looking to complete a form, enter the URL here:{" "}
          </p>
          <div>
            <button className="py-2 px-4 bg-white rounded-lg w-[340px] block m-auto text-gray text-start mt-5 shadow-2xl">
              form URL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
