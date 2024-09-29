'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function ParentCategoryRightMenu({ onModalCategoryName }) {

  const [parentCategories, setParentCategories] = useState([]);
  const fetchParentCategories = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await axios.get(
        "https://sn6jm18m-8000.inc1.devtunnels.ms/api/v1/parent-category", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("response from a get ", response)
      console.log("Parent Category ", parentCategories)
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchParentCategories()

  }, [fetchParentCategories])


  return (
    <div className="text-black flex mx-2 flex-col gap-4">
      <div className="">
        <button
          className="px-3 py-2 bg-blue-900 text-white font-bold text-sm rounded-md "
          onClick={() => onModalCategoryName("Parent Category")}
        >
          Add New
        </button>
      </div>
      <div className="relative  overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3  ">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
