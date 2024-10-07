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
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function NavbarNext({ onCategorySelect, activeCategoryId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Router = useRouter();

  const categories = [
    { id: "66f9c4197df5bd17cff84c37", name: "Account" },
    { id: "66f9c4227df5bd17cff84c3a", name: "Items" },
    { id: "66f9c4117df5bd17cff84c34", name: "TopUp" },
  ];

  const handleCategoryClick = (id) => {
    onCategorySelect(id);

    Router.push(`/categories?id=${id}`);
  };

  return (
    <Navbar className="flex justify-start items-center bg-[#1E1F28] text-gray-300">
      <NavbarContent className="flex items-center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <NavbarBrand className="flex items-center gap-1">
          <Image src={logo} alt="logo" width={100} height={40} />
          <p className="font-bold text-blue-600 text-xl -ml-6">Synx</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex items-center gap-3">
          <Link
            className="text-gray-400 text-lg hover:text-white bg-transparent border-0 cursor-pointer"
            href="/"
          >
            Home
          </Link>
          {categories.map((category) => (
            <NavbarItem key={category.id}>
              <button
                className={`text-gray-400 hover:text-white text-lg bg-transparent border-0 cursor-pointer ${
                  activeCategoryId === category.id ? "text-green-600" : ""
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>

      {isMenuOpen && (
        <NavbarMenu className="bg-[#14131A] flex items-center">
          <Link
            className=" text-lg text-white bg-transparent border-0 cursor-pointer"
            href="/"
          >
            Home
          </Link>
          {categories.map((category) => (
            <NavbarMenuItem
              key={category.id}
              className="flex flex-col gap-6 items-center p-8"
            >
              <button
                className="text-white text-xl bg-transparent border-0 cursor-pointer"
                onClick={() => handleCategoryClick(category.id)}
                set
              >
                {category.name}
              </button>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
