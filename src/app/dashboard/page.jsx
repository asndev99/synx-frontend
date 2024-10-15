"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import ListingRigthMenu from "../../../AppComponents/ListingRightMenu";
import RightMenu from "../../../AppComponents/RightMenu";
import SideBar from "../../../AppComponents/SideBar";


import Home from "../../../AppComponents/Home";
import Categories from "../../../AppComponents/Categories";
import AccountsRightMenu from "../../../AppComponents/AccountsRightMenu";
import { PropagateLoader } from "react-spinners";
import ItemsRightMenu from "../../../AppComponents/ItemsRightMenu";
import TopUpRightMenu from "../../../AppComponents/TopUpRightMenu";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const navigate = useRouter();
  const { loading, error } = useSelector((state) => state.user);
  const [selectedCategory, setSelectedCategory] = useState("Home");
  



  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate.push("/login/admin");
    }
  }, [navigate]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
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
      <Toaster />
      <div className="flex">
        <SideBar onCategoryChange={handleCategoryChange} />
        <div className="flex-1">
          <RightMenu />
          {selectedCategory === "Home" && <Home />}

          {selectedCategory === "Categories" && <Categories />}
          {selectedCategory === "Items" && <ItemsRightMenu />}
          {selectedCategory === "Listing" && (
            <ListingRigthMenu  />
          )}
          {selectedCategory === "Accounts" && <AccountsRightMenu />}

          {selectedCategory === "Topup" && <TopUpRightMenu />}
        </div>
      </div>
      {error && <p className="text-red-600">{error}</p>}
     
    </>
  );
};

export default Dashboard;
