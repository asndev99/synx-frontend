"use client";
import Image from "next/image";
import AdminAvatar from "../public/adminAvatar.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter(); // Corrected here
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [admindata, setAdmindata] = useState(null); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_data"); 
    router.push("/login/admin"); 
  };

  useEffect(() => {
    const storedAdminData = localStorage.getItem("admin_data");
    if (storedAdminData) {
      const parsedData = JSON.parse(storedAdminData);
      const data = parsedData;
      setAdmindata(data);
    }
  }, []);

  return (
    <div className="bg-blue-500 py-4 flex justify-end items-center w-full mb-2 rounded-bl-lg">
      <div className="flex items-center mr-6 gap-2">
        <Image
          src={admindata?.imageUrl || AdminAvatar} // Safely check admin data
          width={50}
          height={50}
          className="rounded-full object-cover cursor-pointer"
          alt="Admin Avatar"
          onClick={toggleDropdown}
        />
        <p className="text-white w-20 px-2 select-none  ">{admindata?.username || "Admin"}</p>{" "}
        
      </div>

      {isDropdownOpen && (
        <div className="absolute top-[4.5rem] right-16 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-10">
          <p
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer select-none"
            onClick={handleLogout}
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
