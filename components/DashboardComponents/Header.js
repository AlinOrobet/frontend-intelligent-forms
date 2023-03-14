import React, {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import UserProfile from "./UserProfile";
function Header({handleSidebar, user}) {
  const [openUserProfile, setOpenUserProfile] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-4 font-secondary text-primary z-30 bg-button">
      <div className="flex items-center justify-between">
        <div className="md:hidden duration-500 transition-all text-white p-2 hover:bg-lightBlue hover:rounded-full hover:flex hover:items-center hover:justify-center ml-2">
          <AiOutlineMenu size={24} className="cursor-pointer " onClick={() => handleSidebar()} />
        </div>
        <h1 className="hidden md:inline w-full text-2xl font-primary cursor-pointer ">
          IntelligentForms
        </h1>
        <div className="flex items-center justify-end space-x-5 w-full ">
          {user.subscription.status === "Inactive" && (
            <div className="hidden md:inline bg-white hover:bg-lightBlue hover:text-primary text-third px-4 py-1 rounded-md cursor-pointer duration-300 font-bold duration-500 transition-all">
              Activate Subscription
            </div>
          )}
          <UserProfile
            openUserProfile={openUserProfile}
            setOpenUserProfile={setOpenUserProfile}
            user={user}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
