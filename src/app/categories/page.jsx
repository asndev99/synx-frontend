"use client";

import React, { useState, useEffect } from "react";
import NavbarNext from "../../../AppComponents/NavbarNext";
import CardNextUi from "../../../AppComponents/CardNextUi";
import Footer from "../../../AppComponents/FooterNext"
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

const Categories = () => {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const Router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategoryId = searchParams.get("id");

  const fetchUserAllCategories = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user-listing/${id}`
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategoryId) {
      setActiveCategoryId(selectedCategoryId);
      const fetchData = async () => {
        const data = await fetchUserAllCategories(selectedCategoryId);
        setListing(data || []);
      };
      fetchData();
    }
  }, [selectedCategoryId]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNext
        onCategorySelect={setActiveCategoryId}
        activeCategoryId={activeCategoryId}
      />

      <div className="flex-grow overflow-auto bg-[#0E0E11] flex flex-col md:flex-row justify-center gap-4 flex-wrap items-center">
        <CardNextUi listing={listing} loading={loading} />
      </div>

      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default Categories;