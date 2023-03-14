import Image from "next/image";
import React from "react";
import {useRouter} from "next/router";
function Card({cardData}) {
  const router = useRouter();
  function setHowLongFromNow(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      if (Math.floor(interval) >= 7) {
        return Math.floor(Math.floor(interval) / 7) + " weeks";
      }
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  return (
    <div className="bg-lightBlue hover:bg-third text-primary duration-1000 h-full w-full rounded-2xl  p-4 cursor-pointer">
      <div className="flex items-center">
        {/* <HiOutlineDocument size={36} /> */}
        <Image src="/assets/stuff/happy_file.png" height={36} width={36} alt="doc" />
        <div className="flex flex-col font-secondary text-sm -mt-1">
          <p className="font-bold">You recently open this</p>
          <p>{setHowLongFromNow(cardData?.lastOpen)} ago</p>
        </div>
      </div>
      <div className="relative h-20 my-4 flex items-center justify-center blur-[2px]">
        <Image src="/demo.jpg" alt="last_file" fill className="object-cover" />
      </div>
      <div className="flex items-center space-x-1">
        <Image src="/assets/stuff/check_document.png" height={30} width={24} alt="doc" />
        <p className="font-bold text-sm text-ellipsis whitespace-nowrap overflow-hidden">
          {cardData?.formTitle}
        </p>
      </div>
    </div>
  );
}

export default Card;
