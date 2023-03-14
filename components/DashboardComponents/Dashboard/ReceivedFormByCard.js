import React from "react";
import Image from "next/image";
function ReceivedFormByCard({client, formName}) {
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
    <div className="bg-lightBlue hover:bg-third text-primary w-full first:rounded-t-md last:rounded-b-md p-4 duration-1000 cursor-pointer border-b last:border-b-0 space-y-3">
      <div className="flex items-center space-x-1">
        <Image src="/assets/stuff/happy_file.png" height={30} width={30} alt="doc" />
        <p className="text-lg font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          {formName}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold">{client.clientName}</p>
        <p className="font-semibold">{setHowLongFromNow(client.recevideAt)} ago</p>
      </div>
    </div>
  );
}

export default ReceivedFormByCard;
