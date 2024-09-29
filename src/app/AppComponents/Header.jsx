"use client";
import Image from "next/image";
import menImage from "../../public/men.jpg";
import { useState } from "react";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="bg-blue-500 py-4 flex justify-end items-center w-full mb-2 rounded-md">
      <div className="flex items-center">
        <Image
          src={menImage}
          width={50}
          height={50}
          className="rounded-full object-cover cursor-pointer"
          alt="User Image"
          onClick={toggleDropdown}
        />
        <p className="text-white w-20 px-2">AnasSSSs</p>
      </div>

      {isDropdownOpen && (
        <div className="absolute top-[4.5rem]  right-16 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-10">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
