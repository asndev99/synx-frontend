"use client";

import React, { useState } from "react";
import NavbarNext from "./AppComponents/NavbarNext";
import Corousel from "./AppComponents/Corousel";
import MainSection from "./AppComponents/MainSection";
import Footer from "./AppComponents/FooterNext";

const Page = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const handleCategorySelect = (id) => {
    setActiveCategoryId(id);
  };

  return (
    <>
      <NavbarNext
        onCategorySelect={handleCategorySelect}
        activeCategoryId={activeCategoryId}
      />
      <div className="w-full overflow-hidden">
        <Corousel />
      </div>
      <MainSection />
      <Footer />
    </>
  );
};

export default Page;
