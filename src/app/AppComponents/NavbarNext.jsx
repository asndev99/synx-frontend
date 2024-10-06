"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function NavbarNext({ onCategorySelect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define categories with IDs
  const categories = [
    { id: "66f9c4197df5bd17cff84c37", name: "Profile" },
    { id: 2, name: "Dashboard" },
    { id: 3, name: "Activity" },
    // Add more categories if needed
  ];

  return (
    <Navbar className="flex justify-start items-center bg-[#1E1F28] text-white">
      <NavbarContent className="flex items-center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex items-center gap-1">
          <h1>Logo</h1>
          <p className="font-bold">ACME</p>
        </NavbarBrand>

        {/* NavbarContent aligned to left with no gap */}
        <NavbarContent className="hidden sm:flex items-center gap-3">
          {categories.map((category) => (
            <NavbarItem key={category.id}>
              <button
                className="text-white text-xl bg-transparent border-0 cursor-pointer"
                onClick={() => onCategorySelect(category.id)}
              >
                {category.name}
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="bg-[#14131A]">
        {categories.map((category) => (
          <NavbarMenuItem
            key={category.id}
            className="flex flex-col gap-6 items-center p-8"
          >
            <button
              className="text-white text-xl bg-transparent border-0 cursor-pointer"
              onClick={() => onCategorySelect(category.id)}
            >
              {category.name}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
