import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className="w-full grid lg:grid-cols-5 flex items-center gap-1 md:gap-3 lg:gap-0 p-3 md:p-5">
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
        <div>
          <h6 className="font-medium">About</h6>
          <ul>
            <li className="py-1 md:py-2 text-xs">Analytics</li>
            <li className="py-1 md:py-2 text-xs">Marketing</li>
            <li className="py-1 md:py-2 text-xs">Commerce</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium">Support</h6>
          <ul>
            <li className="py-1 md:py-2 text-xs">Pricing</li>
            <li className="py-1 md:py-2 text-xs">Document</li>
            <li className="py-1 md:py-2 text-xs">Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium ">Contact</h6>
          <ul>
            <li className="py-1 md:py-2 text-xs">About</li>
            <li className="py-1 md:py-2 text-xs">Blog</li>
            <li className="py-1 md:py-2 text-xs">Jobs</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium">Legal</h6>
          <ul>
            <li className="py-1 md:py-2 text-xs">Claim</li>
            <li className="py-1 md:py-2 text-xs">Policy</li>
            <li className="py-1 md:py-2 text-xs">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
