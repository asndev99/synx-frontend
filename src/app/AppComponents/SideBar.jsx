import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { SiAmazongames } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { RiAlignItemLeftFill } from "react-icons/ri";
import { MdAccountTree } from "react-icons/md";
import { IoList } from "react-icons/io5";
export default function SideBar({ onCategoryChange }) {
  return (
    <div className="w-64 h-screen bg-white p-4 border-r border-gray-300">
      <div className="flex items-center">
        <Image />
        <h2 className="text-blue-500 text-lg font-bold mb-4">SYnX</h2>
      </div>
      <ul className="text-gray-800 p-2 flex flex-col gap-2">
        <li
          className="flex items-center py-2 px-3 hover:bg-gray-200 hover cursor-pointer rounded"
          onClick={() => onCategoryChange("Home")}
        >
          <div className="flex gap-2 items-center">
            <FaHome className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Home</p>
          </div>
        </li>
        <li
          className="flex items-center py-2 px-3 hover:bg-gray-200 hover cursor-pointer rounded"
          onClick={() => onCategoryChange("Categories")}
        >
          <div className="flex gap-2 items-center">
            <BiCategory className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Categories</p>
          </div>
        </li>
        <li
          className="flex items-center py-2 px-3 hover:bg-gray-200 hover cursor-pointer rounded"
          onClick={() => onCategoryChange("Accounts")}
        >
          <div className="flex gap-2 items-center">
            <MdAccountTree className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Accounts</p>
          </div>
        </li>
        <li
          className="flex items-center py-2 px-3 hover:bg-gray-200 hover cursor-pointer rounded"
          onClick={() => onCategoryChange("Categories")}
        >
          <div className="flex gap-2 items-center">
            <MdCategory className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Top up</p>
          </div>
        </li>
        <li
          className="flex items-center py-2 px-3 hover:bg-gray-200 hover cursor-pointer rounded"
          onClick={() => onCategoryChange("Items")}
        >
          <div className="flex gap-2 items-center">
            <RiAlignItemLeftFill className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Items</p>
          </div>
        </li>
        <li
          className="flex items-center py-2 px-3 w-full hover:bg-gray-200 hover:cursor-pointer rounded border-b border-gray-200"
          onClick={() => onCategoryChange("Games")}
        >
          <div className="flex gap-2 items-center">
            <SiAmazongames className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Games</p>
          </div>
        </li>
        <li
          className="flex items-center  py-2 px-3 hover:bg-gray-200 hover:cursor-pointer rounded border-b border-gray-200"
          onClick={() => onCategoryChange("Listing")}
        >
          <div className="flex justify-center gap-2 items-center">
            <IoList className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Listing</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
