"use client";
import Image from "next/image";
import menImage from "../../public/men.jpg";

const Header = () => {
  return (
    <div className="bg-blue-500 py-4 flex justify-end items-center w-full mb-2 rounded-md">
      <div className="flex items-center">
        <Image
          src={menImage}
          width={50}
          height={50}
          className="rounded-full object-cover"
          alt="User Image"
        />
        <p className="text-white w-20 px-2">AnasSSSs</p>
      </div>
    </div>
  );
};

export default Header;