import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

import { BiSolidOffer } from "react-icons/bi";
const MainSection = () => {
  return (
    <div className="flex flex-col items-center p-10 w-full bg-[#0E0E11] cursor-pointer text-white ">
      <h1>G2G Marketplace</h1>
      <h3>World-Leading Digital Marketplace</h3>
      <div className="flex mt-4 gap-4 w-full md:flex-row flex-col items-center">
        <div className="flex flex-col p-4 gap-3 bg-[#282836] hover:bg-[#434252] rounded-lg items-center w-[60vw] h-[30vh]  select-none cursor-pointer text-white">
          <RiCustomerService2Fill className=" text-5xl" />
          <h4>Customer Support </h4>
          <p className="text-center  text-sm ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            corrupti est, magnam blanditiis asperiores modi! Quisquam ipsam
            corporis nulla aperiam.
          </p>
        </div>
        <div className="flex flex-col  gap-3 p-4 bg-[#282836] hover:bg-[#434252] rounded-lg items-center w-[60vw] h-[30vh] text-white   ">
          <FaUsers className=" text-5xl" />
          <h4>About Us</h4>
          <p className="text-center  text-sm ">
            At Synx, we understand that gaming is more than just a hobby; it's a
            lifestyle. Our mission is to connect gamers with top-quality games
            and accessories at competitive prices. With a dedicated team of
            gaming enthusiasts, we strive to deliver exceptional service and an
            unparalleled shopping experience.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-4 bg-[#282836] hover:bg-[#434252] rounded-lg text-white  w-[60vw] h-[30vh]  items-center ">
          <BiSolidOffer className=" text-5xl" />
          <h4>Best Offer</h4>
          <p className="text-center  text-sm ">
            "Need help or have questions? Contact us anytime! Reach us by phone
            at [Your Phone Number] or drop us an email at [Your Email Address].
            We're always happy to assist you on your gaming journey!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
