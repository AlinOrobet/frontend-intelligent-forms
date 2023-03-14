import React from "react";
import Image from "next/image";
import {AiOutlineFileAdd} from "react-icons/ai";
function NewCard() {
  return (
    <div className="bg-lightBlue hover:bg-third text-primary h-full w-full rounded-2xl  p-4 duration-1000 cursor-pointer">
      <div className="flex items-center py-1">
        <p className="font-bold">Create new form</p>
      </div>
      <div className="h-28 flex items-center justify-center">
        <AiOutlineFileAdd size={50} />
      </div>
      <div className="flex items-center space-x-1">
        <Image src="/assets/stuff/check_document.png" height={30} width={24} alt="doc" />
        <p className="font-bold">Form</p>
      </div>
    </div>
  );
}

export default NewCard;
