import React from "react";
import Image from "next/image";
import {FooterData} from "../../data/FooterData";
function Footer() {
  return (
    <div className="flex items-center w-full justify-between md:grid md:grid-cols-5 gap-1 p-3 md:p-5 ">
      <div className="flex flex-col md:col-span-2">
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
      <div className="relative w-[75px] h-[70px] md:w-[90px] md:h-[90px] ml-4 ">
        <Image src="/assets/footer/duck.png" fill alt="logo_team" />
      </div>
      <div className="hidden md:flex md:col-span-2 justify-between text-primary font-primary mx-2">
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
{
  /* <div className="w-full grid lg:grid-cols-5 flex items-center gap-1 md:gap-3 lg:gap-0 p-3 md:p-5">
      <div className="flex items-center justify-between lg:col-span-2">
        <div className="flex flex-col">
          <h1 className="font-primary text-primary text-xl md:text-3xl mb-1">
            IntelligentForms by
          </h1>
          <div className="flex flex-row">
            <div className="w-[120px] h-[83px] md:w-[120px] md:h-[100px] relative">
              <Image src="/assets/footer/form_icon.png" alt="form_icon" fill />
            </div>
            <div className="flex flex-col w-full">
              <h2 className="font-primary text-primary text-xl md:text-3xl whitespace-pre ml-2 mb-1.5">
                Ratustele Pac-Pac
              </h2>
              <div className="flex items-center space-x-8 ml-3 mt-1">
                <div className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] relative">
                  <Image src="/assets/footer/behance.png" alt="behance" fill />
                </div>
                <div className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] border border-white border-[2.6px] relative">
                  <Image src="/assets/footer/github.png" alt="github" fill />
                </div>
                <div className="w-[42px] h-[42px] md:w-[52px] md:h-[52px] relative">
                  <Image src="/assets/footer/linkedin.png" alt="linkedin" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:inline lg:hidden">
          <Image src="/assets/footer/duck.png" width="135" height="135" alt="logo_team" />
        </div>
      </div>
      <div className="hidden lg:inline lg:col-span-1">
        <Image src="/assets/footer/duck.png" width="135" height="135" alt="logo_team" />
      </div>
      <div className="lg:col-span-2 flex justify-between text-primary font-primary px-3">
        {FooterData.map((item) => (
          <div key={item.id}>
            <h6 className="font-medium">{item.title}</h6>
            <ul>
              {item.items.map((subitem) => (
                <ul key={subitem.id}>
                  <li className="py-1 md:py-2 text-xs">{subitem.title}</li>
                </ul>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div> */
}
