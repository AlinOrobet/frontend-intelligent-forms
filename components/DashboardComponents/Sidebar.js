import Link from "next/link";
import React, {useState} from "react";
import {sidebarData} from "../../data/SidebarData";
function Sidebar({openSidebar}) {
  const [active, setActive] = useState(1);
  return (
    <>
      {openSidebar && (
        <aside class="fixed top-16 left-0 bottom-0 md:hidden fixed left-0 h-full w-[12rem] font-secondary text-primary bg-button z-30">
          {sidebarData.map((item) => (
            <div key={item.id}>
              {item.title && (
                <div className="px-4 py-2 w-full">
                  <p className="font-semibold">{item.title}</p>
                </div>
              )}
              <Link href="">
                <div
                  className={`${
                    active === item.id ? "bg-[rgba(0,0,0,0.1)]" : ""
                  } p-2 w-full flex items-center hover:bg-[rgba(0,0,0,0.1)]`}
                >
                  <span
                    className={`${
                      active === item.id
                        ? "absolute left-0 bg-white h-[42px] w-[3px] transition-500"
                        : ""
                    } `}
                  ></span>
                  <span className="mx-4 text-[1.7rem]">{item.icon}</span>
                  <p className="text-[1rem] whitespace-pre">{item.text}</p>
                </div>
              </Link>
            </div>
          ))}
        </aside>
      )}
    </>
  );
}

export default Sidebar;
