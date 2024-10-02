"use client";

import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdAccountTree, MdCategory } from "react-icons/md";
import { RiAlignItemLeftFill } from "react-icons/ri";

import { IoList } from "react-icons/io5";

export default function SideBar({ onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState("Home");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  const getActiveClass = (category) =>
    activeCategory === category ? "bg-gray-200 text-blue-800" : "";

  return (
    <div className="w-64 h-screen bg-white p-4 border-r border-gray-300">
      <div className="flex items-center">
        <h2 className="text-blue-500 text-lg font-bold mb-4">SYnX</h2>
      </div>
      <ul className="text-gray-800 p-2 flex flex-col gap-2">
        <li
          className={`flex items-center py-2 px-3 hover:bg-gray-200 cursor-pointer rounded ${getActiveClass(
            "Home"
          )}`}
          onClick={() => handleCategoryChange("Home")}
        >
          <div className="flex gap-2 items-center">
            <FaHome className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Home</p>
          </div>
        </li>
        <li
          className={`flex items-center py-2 px-3 hover:bg-gray-200 cursor-pointer rounded ${getActiveClass(
            "Categories"
          )}`}
          onClick={() => handleCategoryChange("Categories")}
        >
          <div className="flex gap-2 items-center">
            <BiCategory className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Categories</p>
          </div>
        </li>
        <li
          className={`flex items-center py-2 px-3 hover:bg-gray-200 cursor-pointer rounded ${getActiveClass(
            "Accounts"
          )}`}
          onClick={() => handleCategoryChange("Accounts")}
        >
          <div className="flex gap-2 items-center">
            <MdAccountTree className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Accounts</p>
          </div>
        </li>
        <li
          className={`flex items-center py-2 px-3 hover:bg-gray-200 cursor-pointer rounded ${getActiveClass(
            "Topup"
          )}`}
          onClick={() => handleCategoryChange("Topup")}
        >
          <div className="flex gap-2 items-center">
            <MdCategory className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Top up</p>
          </div>
        </li>
        <li
          className={`flex items-center py-2 px-3 hover:bg-gray-200 cursor-pointer rounded ${getActiveClass(
            "Items"
          )}`}
          onClick={() => handleCategoryChange("Items")}
        >
          <div className="flex gap-2 items-center">
            <RiAlignItemLeftFill className="h-5 w-5 mr-2 text-blue-500" />
            <p className="font-semibold">Items</p>
          </div>
        </li>

        <li
          className={`flex items-center py-2 px-3 hover:bg-gray-200 cursor-pointer rounded ${getActiveClass(
            "Listing"
          )}`}
          onClick={() => handleCategoryChange("Listing")}
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
