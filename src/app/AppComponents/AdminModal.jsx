"use client"
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const AdminModal = ({ modalOpen, setModalOpen, CategoryName }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
  };

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const addParentCategory = async (data) => {
    console.log("Parent Category Data", data);
    try {
      const token = localStorage.getItem("admin_token");
      const response = await axios.post(
        "https://sn6jm18m-8000.inc1.devtunnels.ms/api/v1/parent-category",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setModalOpen(false);
      toast.success("Parent category added successfully!");

      reset();
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative p-6 w-full max-w-md bg-blue-900 rounded-lg shadow-lg text-white">
          <div className="text-center flex flex-col items-center gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold ">Add New {CategoryName}</h2>
            </div>
            {CategoryName === "Parent Category" && (
              <form className="flex flex-col gap-4 items-center w-full" onSubmit={handleSubmit(addParentCategory)}>
                <input
                  type="text"
                  name="name"
                  className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                  placeholder="Add Parent Category"
                  {...register("name", {
                    required: { value: true, message: "name is required" },
                  })}
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-medium "
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
            )}

            {CategoryName === "Listing_items" && (
              <form className="flex flex-col gap-4 items-center w-full">
                <input
                  type="text"
                  className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                  placeholder="Title"
                />
                <input
                  type="text"
                  className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                  placeholder="Price"
                />
                <input
                  type="text"
                  className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                  placeholder="Delivery Time"
                />
                <textarea
                  type="text"
                  className="px-3 py-2 resize-none rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                  placeholder="Description"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-medium "
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
            )}
            {CategoryName === "Games" && (
              <form className="flex flex-col gap-4 items-center w-full">
                <input
                  type="text"
                  className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                  placeholder="Name"
                />

                <input
                  type="file"
                  className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />

                <div className="flex gap-3">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-white text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-medium "
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminModal;
