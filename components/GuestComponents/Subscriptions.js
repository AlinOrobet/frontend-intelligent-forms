import React from "react";
import Image from "next/image";
import Link from "next/link";
function Subscriptions() {
  return (
    <div className="max-w-[1200px] m-auto h-full w-full p-5 md:p-7 lg:px-10 text-white font-secondary font-bold">
      <h2 className="text-2xl">Subscriptions and contact</h2>
      <div className="md:flex md:space-x-4">
        {/* card 1 */}
        <div className="my-20 md:m-0 ">
          <div className="bg-gray text-secondary text-center font-secondary text-xl  rounded-tr-3xl rounded-bl-3xl shadow-2xl relative pt-[120px] md:hover:scale-105">
            <div className="absolute w-[250px] h-[250px] top-[-90px] left-[40px]">
              <Image src="/assets/main/free-sub.png" fill />
            </div>
            {/* block fara imagine */}
            <div className="p-4 ">
              <h1 className="text-2xl font-extrabold "> Free subscription</h1>
              <p className="text-xl text-third">
                you can have a maximum of 3 forms at the same time
              </p>
              <p className="text-xl text-third">Price: free</p>
              <button className="py-1 px-[50px] bg-secondary text-white rounded-tr-md rounded-bl-md shadow-2xl block m-auto text-lg">
                GET NOW
              </button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="mb-20 md:m-0">
          <div className="bg-gray text-secondary text-center font-secondary text-xl  rounded-tr-3xl rounded-bl-3xl shadow-2xl relative pt-[120px] md:hover:scale-105">
            <div className="absolute w-[250px] h-[250px] top-[-80px] left-[40px]">
              <Image src="/assets/main/blog-post.png" fill />
            </div>
            {/* block fara imagine */}
            <div className="p-4 ">
              <h1 className="text-2xl font-extrabold ">Basic subscription</h1>
              <p className="text-xl text-third">
                you can have a maximum of 50 forms at the same time
              </p>
              <p className="text-xl text-third">Price: 10$/month </p>
              <button className="py-1 px-[50px] bg-secondary text-white rounded-tr-md rounded-bl-md shadow-2xl block m-auto text-lg">
                GET NOW
              </button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="mb-20 md:m0">
          <div className="bg-gray text-secondary text-center font-secondary text-xl  rounded-tr-3xl rounded-bl-3xl shadow-2xl relative pt-[120px] md:hover:scale-105">
            <div className="absolute w-[350px] h-[350px] top-[-130px] left-0">
              <Image src="/assets/main/pro.png" fill />
            </div>
            {/* block fara imagine */}
            <div className="p-4 ">
              <h1 className="text-2xl font-extrabold "> Pro subscription</h1>
              <p className="text-xl text-third">
                you can have an unlimited number of forms at the same time
              </p>
              <p className="text-xl text-third">+24/7 unlimited support</p>
              <p className="text-xl text-third">Price: 25$/month </p>
              <button className="py-1 px-[50px] bg-secondary text-white rounded-tr-md rounded-bl-md shadow-2xl block m-auto text-lg">
                GET NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
