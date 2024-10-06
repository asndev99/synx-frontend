"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
const AdminModal = ({ modalOpen, setModalOpen, OngameAdded, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [games, setGames] = useState([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (selectedCategory) {
      const category = categories.find((cat) => cat._id === selectedCategory);
      setGames(category ? category.games : []);
    } else {
      setGames([]);
    }
  }, [selectedCategory, categories]);

  const addListing = async (value) => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/create-list`,
        {
          description: value.description,
          title: value.title,
          price: value.price,
          deliveryTime: value.deliveryTime,
          gameId: value.gameId, // Pass the selected game ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setModalOpen(false);
      toast.success("List added successfully!");
      OngameAdded();
      reset();
    } catch (err) {
      toast.error("Something went wrong");
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative p-6 w-full max-w-md bg-blue-900 rounded-lg shadow-lg text-white">
          <div className="text-center flex flex-col items-center gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold ">Add New List</h2>
            </div>

            <form
              className="flex flex-col gap-4 items-center w-full"
              onSubmit={handleSubmit(addListing)}
            >
              {/* Category Selection */}
              <select
                className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                {...register("categoryId", {
                  required: { value: true, message: "Category is required" },
                })}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.categoryId && (
                <p className="text-red-500 text-xs">
                  {errors.categoryId.message}
                </p>
              )}

              {/* Game Selection */}
              <select
                className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                {...register("gameId", {
                  required: { value: true, message: "Game is required" },
                })}
                disabled={!selectedCategory}
              >
                <option value="">Select Game</option>
                {games.map((game) => (
                  <option key={game._id} value={game._id}>
                    {game.name}
                  </option>
                ))}
              </select>
              {errors.gameId && (
                <p className="text-red-500 text-xs">{errors.gameId.message}</p>
              )}
              <input
                type="text"
                name="title"
                className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                placeholder="Title"
                {...register("title", {
                  required: { value: true, message: "Title is required" },
                })}
              />
              {errors.title && (
                <p className="text-red-500 text-xs">{errors.title.message}</p>
              )}

              <input
                type="text"
                className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                placeholder="Price"
                name="price"
                {...register("price", {
                  required: { value: true, message: "Price is required" },
                })}
              />
              {errors.price && (
                <p className="text-red-500 text-xs">{errors.price.message}</p>
              )}

              <input
                type="text"
                className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                placeholder="Delivery Time"
                name="deliveryTime"
                {...register("deliveryTime", {
                  required: {
                    value: true,
                    message: "Delivery time is required",
                  },
                })}
              />
              {errors.deliveryTime && (
                <p className="text-red-500 text-xs">
                  {errors.deliveryTime.message}
                </p>
              )}

              <textarea
                type="text"
                className="px-3 py-2 resize-none rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                placeholder="Description"
                name="description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                })}
              />
              {errors.description && (
                <p className="text-red-500 text-xs">
                  {errors.description.message}
                </p>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-medium"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white hover:text-blue-800 rounded-lg font-medium hover:bg-gray-200"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminModal;
