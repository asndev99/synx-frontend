"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import ListingRigthMenu from "../AppComponents/ListingRightMenu";
import RightMenu from "../AppComponents/RightMenu";
import SideBar from "../AppComponents/SideBar";
import AdminModal from "../AppComponents/AdminModal";
import { ToastContainer } from "react-toastify";
import Home from "../AppComponents/Home";
import Categories from "../AppComponents/Categories";
import AccountsRightMenu from "../AppComponents/AccountsRightMenu";
import { PropagateLoader } from "react-spinners";
import ItemsRightMenu from "../AppComponents/itemsRightMenu";
import TopUpRightMenu from "../AppComponents/TopUpRightMenu";

const Dashboard = () => {
  const navigate = useRouter();
  const { loading, error } = useSelector((state) => state.user);
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [selectedModalCategory, setSelectedModalCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate.push("/login/admin");
    }
  }, [navigate]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCategoryModal = (categoryModalName) => {
    setSelectedModalCategory(categoryModalName);
    setModalOpen(!modalOpen);
  };

  if (loading) {
    return (
      <div className="text-center">
        <PropagateLoader color="#3847f0" />
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <div className="flex">
        <SideBar onCategoryChange={handleCategoryChange} />
        <div className="flex-1">
          <RightMenu />
          {selectedCategory === "Home" && <Home />}

          {selectedCategory === "Categories" && <Categories />}
          {selectedCategory === "Items" && <ItemsRightMenu />}
          {selectedCategory === "Listing" && (
            <ListingRigthMenu onModalCategoryName={handleCategoryModal} />
          )}
          {selectedCategory === "Accounts" && <AccountsRightMenu />}

          {selectedCategory === "Topup" && (
            <TopUpRightMenu CategoryId={TopupId} />
          )}
        </div>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      {modalOpen && (
        <AdminModal
          modalOpen={modalOpen}
          CategoryName={selectedModalCategory}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default Dashboard;
