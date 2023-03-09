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
        <div>
          <div className="relative w-10 h-10">
            <Image src="/assets/main/create-ft.png" fill />
          </div>
          <p>
            Easily create a form using our form creation page and wait for
            people to complete it.
          </p>
        </div>
        <div>
          <p>If you are looking to complete a form, enter the URL here: </p>
          <div>
            <button>1</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
