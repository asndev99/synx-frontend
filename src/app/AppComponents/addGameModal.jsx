"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-toastify";

export default function AddGameModal({ isOpen, setIsModalOpen }) {
  const [loading, setLoading] = useState(false);
  const [parentCategories, setParentCategories] = useState([]);

  const fetchParentCategories = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("admin_token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/parent-category/all-categories`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response from GET: ", response);
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gameName: "",
      imageUrls: [""],
      category: "", 
    },
  });

 
  const { fields, append } = useFieldArray({
    control,
    name: "imageUrls", 
  });

  
  const onSubmit = async (value) => {
    try {
      console.log("New Game Data:", value);
      const token = localStorage.getItem("admin_token");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/game`,
        {
          name: value.gameName,
          imageUrls: value.imageUrls,
          parentCategoryId: value.category, // Ensure this is correctly sent
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("token ", token);
      console.log("data ");
      console.log("API Post Response: ", response.data.data);
      toast.success("Game added successfully!");
      setIsModalOpen(false); 
    } catch (error) {
      console.error("Error occurred while adding the game:", error);
      toast.error("Failed to add game. Please try again.");
    }
  };

  
  const addImageUrl = () => {
    append(""); 
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchParentCategories();
      setParentCategories(data || []); // Handle potential null or undefined response
    };
    getData();
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative p-6 w-full max-w-md bg-blue-900 rounded-lg shadow-lg text-white">
          <form
            className="text-center flex flex-col items-center gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Add New Games</h2>
            </div>

         
            <div className="mb-3">
              <label className="text-sm font-medium text-white mb-1">
                Game Name
              </label>
              <input
                type="text"
                className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                placeholder="Enter game name"
                {...register("gameName", { required: "Game name is required" })}
              />
              {errors.gameName && (
                <p className="text-xs text-red-600">
                  {errors.gameName.message}
                </p>
              )}
            </div>

            {/* Input for the first Image URL */}
            <div className="mb-3">
              <label className="text-sm font-medium text-white mb-1">
                Image URL
              </label>
              <input
                type="text"
                className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                placeholder="Enter image URL"
                {...register(`imageUrls.0`, {
                  required: "Image URL is required",
                })} 
              />
              {errors.imageUrls?.[0] && (
                <p className="text-xs text-red-600">
                  {errors.imageUrls[0].message}
                </p>
              )}
            </div>

            {/* Dynamically rendered image URL fields */}
            {fields.map((field, index) => (
              <div className="mb-3" key={field.id}>
                <label className="text-sm font-medium text-white mb-1">
                  Image URL {index + 1}
                </label>
                <input
                  type="text"
                  className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                  placeholder={`Enter image URL ${index + 1}`}
                  {...register(`imageUrls.${index}`, {
                    required: "Image URL is required",
                  })}
                />
                {errors.imageUrls?.[index] && (
                  <p className="text-xs text-red-600">
                    {errors.imageUrls[index].message}
                  </p>
                )}
              </div>
            ))}

            {/* Button to add another Image URL */}
            <button
              type="button"
              onClick={addImageUrl}
              className="px-4 py-2 bg-blue-600 text-white hover:text-blue-800 rounded-lg font-medium hover:bg-gray-200"
              disabled={loading} // Disable while loading categories
            >
              Add Another Image
            </button>

            {/* Select for category */}
            <div className="mb-3">
              <label className="text-sm font-medium text-white mb-1">
                Select Category
              </label>
              <select
                className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                {...register("category", { required: "Category is required" })}
              >
                <option value="">Select a category</option>
                {loading ? (
                  <option disabled>Loading categories...</option> // Show loading message
                ) : (
                  parentCategories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {" "}
                      {/* Adjust according to your category object structure */}
                      {cat.name}
                    </option>
                  ))
                )}
              </select>
              {errors.category && (
                <p className="text-xs text-red-600">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white hover:text-blue-800 rounded-lg font-medium hover:bg-gray-200"
              >
                Save Game
              </button>
              <button
                type="button" // Make sure to set type to "button" to prevent form submission
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
