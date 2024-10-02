"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;

export default function AddGameModal({
  ApiUrl,
  CategoryId,
  isOpen,
  setIsModalOpen,
}) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [file, setFile] = useState(); // Initialize with null
  console.log("APi Url", ApiUrl);
  console.log("Different Id ", CategoryId);
  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Store the selected file
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("admin_token");

    const gameData = new FormData();
    gameData.append("file", file);
    gameData.append("name", name);
    gameData.append("parentCategoryId", CategoryId);

    try {
      const response = await axios.post(ApiUrl, gameData, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "multipart/form-data",
          // No need to set Content-Type for FormData; browser will set it correctly
        },
      });

      setIsModalOpen(false);
      toast.success("Game added successfully!");
      // setIsModalOpen(false); // Close the modal on success
    } catch (error) {
      console.log("errorr occureedd", error);
      toast.error("Failed to add game. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 w-full max-w-md bg-blue-900 rounded-lg shadow-lg text-white">
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold">Add New Game</h2>

          <div className="mb-3">
            <label className="text-sm font-medium text-white mb-1">
              Game Name
            </label>
            <input
              type="text"
              className="px-3 py-2 rounded-md border-2 w-full bg-blue-800 text-white focus:border-gray-500"
              placeholder="Enter game name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="text-sm font-medium text-white mb-1">
              Image File
            </label>
            <input
              type="file"
              name="file"
              className="px-3 py-2 rounded-md border-2 w-full bg-blue-800 text-white focus:border-gray-500"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className={`px-4 py-2 ${
                loading ? "bg-gray-400" : "bg-blue-600"
              } text-white rounded-lg`}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Game"}
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-white text-blue-500 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
