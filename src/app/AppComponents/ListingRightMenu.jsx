"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";

const ListingRigthMenu = ({ onModalCategoryName }) => {
  const [allList, setAllList] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const FetchAllList = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        toast.error("Admin, please log in again.");
        return;
      }
      setLoading(true); // Start loading
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/get-list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      console.log("List Data here", data);
      return data.data;
    } catch (error) {
      toast.error("Something went wrong while fetching the list.");
      return [];
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    const getList = async () => {
      const data = await FetchAllList();
      setAllList(data);
    };

    const timer = setTimeout(() => {
      getList();
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-black flex mx-2 flex-col gap-4">
      <div>
        <button
          className="px-3 py-2 bg-blue-900 text-white font-bold text-sm rounded-md"
          onClick={() => onModalCategoryName("Listing_items")}
        >
          Add New
        </button>
      </div>

      <div className="relative overflow-x-auto">
        {loading ? (
          <div className="text-center py-4">
            <PropagateLoader color="#3847f0" /> {/* Loader or spinner */}
          </div>
        ) : allList && allList.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">List Name</th>
                <th scope="col" className="px-6 py-3">Delivery Time</th>
                <th scope="col" className="px-6 py-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {allList.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">{item.deliveryTime || "N/A"}</td>
                  <td className="px-6 py-4">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-4 text-xl ">
            No data available
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingRigthMenu;
