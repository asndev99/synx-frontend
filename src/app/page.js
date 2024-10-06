"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarNext from "./AppComponents/NavbarNext";
import Footer from "./AppComponents/FooterNext";
import CardNextUi from "./AppComponents/CardNextUi";

const Page = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [listing,setListing]=useState([])
  const [loading,setLoading]=useState(true)
  const fetchUserAllCategories = async (id) => {
    try {
      setLoading(true)
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user-listing/${id}`
      );
     
      console.log(response.data.data[0]);
      
      console.log("Api Data Listing",listing)
      return response.data.data[0]
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
    finally{
      setLoading(false)
    }
  };

  // Handle category selection from Navbar
  const handleCategorySelect = (id) => {
    setSelectedCategoryId(id);
    fetchUserAllCategories(id); // Fetch data based on selected category ID
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedCategoryId) {
        const data = await fetchUserAllCategories(selectedCategoryId); // Await the async fetch
        setListing(data); // Set the listing state with fetched data
        console.log("listing UseState", data); // Log the fetched data
      }
    };

    fetchData();
    console.log("USesate",listing) // Call the fetch function
  }, [selectedCategoryId]);

  return (
    <>
    {console.log("listing hai yeh",listing)}
      <NavbarNext onCategorySelect={handleCategorySelect} />
      <div className="flex bg-[#0E0E11] flex-col md:flex-row justify-center gap-4 flex-wrap items-center ">
        <CardNextUi listing={listing} loading={loading}  />
        <CardNextUi />
        <CardNextUi />
        {/* Render more cards or content based on fetched data */}
      </div>
      <Footer />
    </>
  );
};

export default Page;
