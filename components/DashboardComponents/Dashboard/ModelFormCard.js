import React from "react";
import Image from "next/image";
import {AiOutlineFileAdd} from "react-icons/ai";
function ModelFormCard() {
  return (
    <div className="bg-lightBlue hover:bg-third text-primary w-full first:rounded-t-md last:rounded-b-md p-4 duration-1000 cursor-pointer border-b last:border-b-0">
      <div className="flex items-center space-x-1">
        <Image src="/assets/stuff/happy_file.png" height={30} width={30} alt="doc" />
        <p className="text-lg font-bold">Cerere buletin</p>
      </div>
      <div className="h-12 flex items-center justify-center">
        <AiOutlineFileAdd size={35} />
      </div>
      <div className="flex items-center space-x-2 font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
        <p>Nume</p>
        <p>Prenume</p>
        <p>CNP</p>
        <p>Strada</p>
        <p>Nume</p>
      </div>
    </div>
  );
}

export default ModelFormCard;
