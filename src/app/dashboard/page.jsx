"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import GamesRightMenu from "../AppComponents/GamesRightMenu";
import ListingRigthMenu from "../AppComponents/ListingRightMenu";
import ParentCategoryRightMenu from "../AppComponents/ParentCategoryRightMenu";
import RightMenu from "../AppComponents/RightMenu";
import SideBar from "../AppComponents/SideBar";
import DefaultContent from "../AppComponents/DefaultContent";
import AdminModal from "../AppComponents/AdminModal";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
    const navigate = useRouter();
    const { loading, error } = useSelector((state) => state.user);
    const [selectedCategory, setSelectedCategory] = useState("default");
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
        return <div>Loading...</div>; // You can replace this with a spinner component
    }

    return (
        <>
        <ToastContainer/>
            <div className="flex">
                <SideBar onCategoryChange={handleCategoryChange} />
                <div className="flex-1">
                    <RightMenu />
                    {selectedCategory === "default" && <DefaultContent />}
                    {selectedCategory === "Games" && (
                        <GamesRightMenu onModalCategoryName={handleCategoryModal} />
                    )}
                    {selectedCategory === "Parent-Category" && (
                        <ParentCategoryRightMenu onModalCategoryName={handleCategoryModal} />
                    )}
                    {selectedCategory === "Listing" && (
                        <ListingRigthMenu onModalCategoryName={handleCategoryModal} />
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
}

export default Dashboard;
