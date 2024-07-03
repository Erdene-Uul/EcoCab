import React from "react";
import Link from "next/link";
import Image from "next/image";
//photos
import EkoCabLogo from "../Assets/ekocablogoicon.png";
import MenuIcon from "../Assets/menu_icon.png";

const SecondNavbar = () => {
    return (
      
    <div className="md:hidden w-full flex justify-between items-center px-4 z-30 shadow-sm text-sm bg-white cursor-default">
      <div className="">
        <Link href="/">
          <div className="inline-flex items-center p-2 mr-4">
            <div className="h-14 w-14 relative ml-2">
              <Image src={EkoCabLogo} layout="fill" alt="Logo" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center pr-5">
        <div className="pr-5">
          <></>
        </div>
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="lg:hidden h-6 w-6 z-50 flex items-center cursor-pointer right-10 top-6 ease-in-out duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default SecondNavbar;
