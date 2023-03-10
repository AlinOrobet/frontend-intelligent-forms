import React from "react";
import Image from "next/image";
function Subscriptions() {
  return (
    <div className="max-w-[1200px] m-auto h-full w-full p-5 md:p-7 lg:px-10 text-white font-secondary font-bold ">
      <h2 className="text-2xl">Subscriptions and contact</h2>
      <div>
        <div className="bg-primary text-secondary">
          <div className="relative w-8 h-8">
            <Image src="/assets/main/free-sub.png" fill />
          </div>
          <h1> Free subscription</h1>
          <p> you can have a maximum of 3 forms at the same time</p>
          <p>Price: free</p>
          <button>GET NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
