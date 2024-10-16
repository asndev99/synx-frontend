"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import AdminModal from "./AdminModal";
const ListingRigthMenu = () => {
  const [allList, setAllList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gameAdded, setGameAdded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
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
     
      return data.data;
    } catch (error) {
      toast.error("Something went wrong while fetching the list.");
      return [];
    } finally {
      setLoading(false);
    }
  };

  const fetchAllCategoriesWithGames = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/listing/all-categories`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      console.log("Error in fetching categories", error);
    }
  };

  const handleGameAdded = () => {
    setGameAdded(!gameAdded);
  };

  const HandleDeleteList = async (id) => {
    try {
     
      const token = localStorage.getItem("admin_token");
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/listing/delete-list/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;

      toast.success("delete List successfully!");
      handleGameAdded();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getListAndCategories = async () => {
      const data = await FetchAllList();
      const categoriesData = await fetchAllCategoriesWithGames();
      setAllList(data);
      setCategories(categoriesData);
      

    };
    getListAndCategories();
  }, [gameAdded]);

  return (
    <div className="text-black flex mx-2 flex-col gap-4">
      <div>
        <button
          className="px-3 py-2 bg-blue-900 text-white font-bold text-sm rounded-md"
          onClick={() => setModalOpen(true)}
        >
          Add New
        </button>
      </div>
      {modalOpen && (
        <AdminModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          OngameAdded={handleGameAdded}
          categories={categories}
        />
      )}

      <div className="relative overflow-x-hidden">
        {loading ? (
          <div className="text-center py-4">
            <PropagateLoader color="#3847f0" />
          </div>
        ) : allList && allList.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.No
                </th>
                <th scope="col" className="px-6 py-3">
                  List Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Delivery Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Game
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {allList.map((item, index) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.title}
                  </td>
                  <td className="px-6 py-4">{item.deliveryTime || "N/A"}</td>
                  <td className="px-6 py-4">${item.price || "N/A"}</td>

                  <img
                    src={item.gameId?.imageUrls?.[0] || "NF"}
                    alt={"Not Found"}
                    className="w-16 h-16 object-cover rounded-full"
                  />

                  <td className="px-6 py-4">
                    {item.gameId?.parentCategoryId?.name || "NF"}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="px-3 py-2 bg-red-600 rounded-md text-white hover:bg-red-500 font-semibold"
                      onClick={() => HandleDeleteList(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-4 text-xl ">No data available</div>
        )}
      </div>
    </div>
  );
};

export default ListingRigthMenu;
