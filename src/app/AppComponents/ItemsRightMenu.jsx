"use client";

import { useState, useEffect } from "react";
import AddGameModal from "./AddGameModal";
import toast from "react-hot-toast";
import axios from "axios";
import { PropagateLoader } from "react-spinners";

const ItemsRightMenu = () => {
  const [allGame, setAllGame] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gameAdded, setGameAdded] = useState(false);

  const itemId = "66f9c4227df5bd17cff84c3a";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModalForGame = () => {
    setIsModalOpen(true);
  };

  const FetchAllGameData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("admin_token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/items/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;

      return data.data || [];
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const handleGameAdded = () => {
    setGameAdded(!gameAdded);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await FetchAllGameData();
      setAllGame(data);
    };

    getData();
  }, [gameAdded]);
  return (
    <div className="text-black flex mx-2 flex-col gap-4 ">
      <div>
        <button
          className="px-3 py-2 bg-blue-900 text-white font-bold text-sm rounded-md cursor-pointer"
          onClick={handleOpenModalForGame}
        >
          Add New
        </button>
      </div>

      {isModalOpen && (
        <AddGameModal
          ApiUrl={`${process.env.NEXT_PUBLIC_API_URL}/admin/items/`}
          CategoryId={itemId}
          isOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          OngameAdded={handleGameAdded}
        />
      )}

      {loading ? (
        <div className="text-center">
          <PropagateLoader color="#3847f0" className="flex items-center" />
        </div>
      ) : (
        <div className="relative overflow-x-auto mb-4 select-none">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-3">
                  S.No
                </th>
                <th scope="col" className="px-3 py-3">
                  Game Name

                </th>
                <th scope="col" className="px-3 py-3">
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              {allGame && allGame.length > 0 ? (
                allGame.map((game, index) => {
                  return (
                    <tr
                      key={game._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-3 py-3">{index + 1}</td>
                      <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {game.name}
                      </td>
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
export default ItemsRightMenu;
