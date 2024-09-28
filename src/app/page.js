// import {Forms } from "flowbite-react";
"use client";
// import Form from "./AppComponents/Form";
import GamesRightMenu from "./AppComponents/GamesRightMenu";
import ListingRigthMenu from "./AppComponents/ListingRightMenu";
import ParentCategoryRightMenu from "./AppComponents/ParentCategoryRightMenu";
import RightMenu from "./AppComponents/RightMenu";
import SideBar from "./AppComponents/SideBar";
import { useState } from "react";
import DefaultContent from "./AppComponents/DefaultContent";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("default");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex">
      <SideBar onCategoryChange={handleCategoryChange} />
      <div className="flex-1  ">
        <RightMenu />
        {selectedCategory === "default" && <DefaultContent />}
        {selectedCategory === "Games" && <GamesRightMenu />}
        {selectedCategory === "Parent-Category" && <ParentCategoryRightMenu />}
        {selectedCategory === "Listing" && <ListingRigthMenu />}
      </div>
    </div>
  );
}
