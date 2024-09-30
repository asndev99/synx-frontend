'use client';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories({ onModalCategoryName }) {
  const [parentCategories, setParentCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchParentCategories = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("admin_token");
      const response = await axios.get(
        "https://sn6jm18m-8000.inc1.devtunnels.ms/api/v1/parent-category", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Response from GET: ", response);
      return response.data.data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    const getData = async () => {
      const data = await fetchParentCategories();
      setParentCategories(data);
    };
    getData();
  }, []);

  return (
    <div className="text-black flex mx-2 flex-col gap-4">
      <div className="">
        <button
          className="px-3 py-2 bg-blue-900 text-white font-bold text-sm rounded-md"
          onClick={() => onModalCategoryName("Parent Category")}
        >
          Add New
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-4">
          <div className="w-8 h-8 border-4 border-blue-900 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Category Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Games Added
                </th>
              </tr>
            </thead>
            <tbody>
              {parentCategories.length > 0 ? (
                parentCategories.map((category) => (
                  <tr key={category._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {category.name}
                    </th>
                    <td className="px-6 py-4">
                      {category.gamesCount || 0}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-4" colSpan="2">
                    No categories available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
