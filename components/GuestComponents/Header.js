import Link from "next/link";
import React, {useState} from "react";
import {NavbarData} from "../../data/NavbarData";

import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

function Header({activeLink}) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center w-full text-primary p-3 md:p-5">
      <Link href="/">
        <h1 className="w-full text-3xl text-white cursor-pointer font-primary">IntelligentForms</h1>
      </Link>
      <ul className="hidden lg:flex font-secondary mt-1 py-2">
        {NavbarData.map((item) => (
          <Link href={`/${item.link}`} key={item.id}>
            <li
              className={`px-2 lg:px-4 cursor-pointer text-white ${
                activeLink === item.id ? "font-bold" : ""
              }`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
      {/* MOBILE */}
      <div onClick={handleNav} className="lg:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={`lg:hidden fixed top-0 w-[70%] h-full bg-main ease-in-out duration-1000 z-30 border-r border-r-gray-900 ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        <Link href="/">
          <h1 className="pt-5 pb-2 w-full text-2xl text-white cursor-pointer font-primary flex items-center justify-center">
            IntelligentForms
          </h1>
        </Link>

        {NavbarData.map((item) => (
          <Link href={`/${item.link}`} key={item.id}>
            <li
              className={`pt-5 px-5 pb-3 border-b border-gray-600 cursor-pointer ${
                activeLink === item.id ? "font-bold" : "text-white"
              }`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Header;
