import React, {useState} from "react";
import {AiOutlineSearch} from "react-icons/ai";
function SearchComponent({handleSearch}) {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      {openSearch ? (
        <div className="duration-500 flex items-center rounded-full bg-third p-2">
          <input
            className="pl-5 bg-transparent outline-none text-xs text-primary"
            type="text"
            placeholder="Start your search"
            onChange={(e) => handleSearch(e)}
          />
          <div className="text-primary inline-flex rounded-full">
            <AiOutlineSearch
              className="cursor-pointer"
              size={18}
              onClick={() => setOpenSearch(!openSearch)}
            />
          </div>
        </div>
      ) : (
        <div className="duration-500 text-white p-2 bg-third rounded-full">
          <AiOutlineSearch
            size={18}
            className="cursor-pointer"
            onClick={() => setOpenSearch(!openSearch)}
          />
        </div>
      )}
    </>
  );
}

export default SearchComponent;
