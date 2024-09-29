"use client";
import GamesRightMenu from "./AppComponents/GamesRightMenu";
import ListingRigthMenu from "./AppComponents/ListingRightMenu";
import ParentCategoryRightMenu from "./AppComponents/ParentCategoryRightMenu";
import RightMenu from "./AppComponents/RightMenu";
import SideBar from "./AppComponents/SideBar";
import { useState } from "react";
import DefaultContent from "./AppComponents/DefaultContent";
import AdminModal from "./AppComponents/AdminModal";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("default");
  const [selectedModalCategory, setSelectedModalCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCategoryModal = (categoryModalName) => {
    setSelectedModalCategory(categoryModalName);
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="flex">
        <SideBar onCategoryChange={handleCategoryChange} />
        <div className="flex-1  ">
          <RightMenu />
          {selectedCategory === "default" && <DefaultContent />}
          {selectedCategory === "Games" && (
            <GamesRightMenu onModalCategoryName={handleCategoryModal} />
          )}
          {selectedCategory === "Parent-Category" && (
            <ParentCategoryRightMenu
              onModalCategoryName={handleCategoryModal}
            />
          )}
          {selectedCategory === "Listing" && (
            <ListingRigthMenu onModalCategoryName={handleCategoryModal} />
          )}
        </div>
      </div>
      {modalOpen && (
        <AdminModal
          modalOpen={modalOpen}
          CategoryName={selectedModalCategory}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
}
