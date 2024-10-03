"use client";

import React, { useState, useEffect } from "react";
import AddGameModal from "./AddGameModal";

import { toast } from "react-toastify";
import axios from "axios";
const AccountsRightMenu = () => {
  const [allGame, setAllGame] = useState([]);
  const [loading, setLoading] = useState(false);

  const accountId = "66fa87f42584938dff071a3e";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModalForGame = () => {
    setIsModalOpen(true);
  };
  const FetchAllGameData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("admin_token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/get-games`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;

      return data.data || [];
    } catch (error) {
      toast.error("something went wrong no fetch games Category");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const getData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const data = await FetchAllGameData();

      setAllGame(data);
    };

    getData();
  }, []);
  return (
    <div className="text-black flex mx-2 flex-col gap-4">
      <div>
        <button
          className="px-3 py-2 bg-blue-900 text-white font-bold text-sm rounded-md"
          onClick={handleOpenModalForGame}
        >
          Add New
        </button>
      </div>

      {isModalOpen && (
        <AddGameModal
          ApiUrl={`${process.env.NEXT_PUBLIC_API_URL}/admin/accounts/create-game`}
          CategoryId={accountId}
          isOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {loading ? (
        <div className="text-center">
          <PropagateLoader color="#3847f0" className="flex items-center" />
        </div> // Loader while data is being fetched
      ) : (
        <div className="relative overflow-x-auto mb-4 select-none">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Image
                </th>
                <th scope="col" className="px-3 py-3">
                  Game Name
                </th>

                <th scope="col" className="px-3 py-3">
                  ParentCategoryId
                </th>
              </tr>
            </thead>
            <tbody>
              {allGame && allGame.length > 0 ? (
                allGame.map((game) => {
                  return (
                    <tr
                      key={game._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-3 py-3">
                        <img
                          src={
                            game.imageUrls
                              ? game.imageUrls[0]
                              : "/placeholder.png"
                          } // Fallback if imageUrls is missing
                          alt={game.name}
                          className="w-16 h-16 object-cover rounded-full"
                        />
                      </td>
                      <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {game.name}
                      </td>

                      <td className="px-3 py-3">{game.parentCategoryId}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No Games Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AccountsRightMenu;
