import React from "react";
import Image from "next/image";
import {FooterData} from "../../data/FooterData";
function Footer() {
  return (
    <div className="flex flex-col items-center md:grid md:grid-cols-5 p-3 md:p-5">
      <div className="flex items-center justify-between w-full pb-4 md:col-span-2">
        <div className="flex flex-col">
          <h1 className="font-primary text-primary text-md sm:text-lg md:text-xl lg:text-2xl">
            IntelligentForms by
          </h1>
          <div className="flex">
            <div className="relative w-[65px] h-[60px] md:w-[80px] md:h-[80px]">
              <Image src="/assets/footer/form_icon.png" alt="form_icon" fill />
            </div>
            <div className="flex flex-col ml-2">
              <h2 className="font-primary text-primary text-md sm:text-lg md:text-xl lg:text-2xl whitespace-pre">
                Ratustele Pac-Pac
              </h2>
              <div className="flex items-center space-x-5 mt-1 md:mt-2">
                <div className="relative w-[32px] h-[32px] md:w-[40px] md:h-[40px]">
                  <Image src="/assets/footer/behance.png" alt="behance" fill />
                </div>
                <div className="relative w-[32px] h-[32px] md:w-[40px] md:h-[40px] border border-white border-[2.6px]">
                  <Image src="/assets/footer/github.png" alt="github" fill />
                </div>
                <div className="relative w-[32px] h-[32px] md:w-[40px] md:h-[40px]">
                  <Image src="/assets/footer/linkedin.png" alt="linkedin" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden relative w-[75px] h-[70px] md:w-[90px] md:h-[90px] ml-4 ">
          <Image src="/assets/footer/duck.png" fill alt="logo_team" />
        </div>
      </div>
      <div className="hidden md:inline relative w-[75px] h-[70px] md:w-[90px] md:h-[90px] ml-4 ">
        <Image src="/assets/footer/duck.png" fill alt="logo_team" />
      </div>
      <div className="flex justify-between w-full md:col-span-2 text-primary font-primary mx-2">
        {FooterData.map((item) => (
          <div key={item.id}>
            <h6 className="font-medium text-sm md:text-md lg:text-lg">{item.title}</h6>
            <ul>
              {item.items.map((subitem) => (
                <ul key={subitem.id}>
                  <li className="py-1.5 text-xs">{subitem.title}</li>
                </ul>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
