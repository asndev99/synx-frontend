import React from "react";

const AdminModal = ({ modalOpen, setModalOpen, CategoryName }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    // You can save the file to the state or perform any other logic here
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative p-6 w-full max-w-md bg-blue-900 rounded-lg shadow-lg text-white">
          <div className="text-center flex flex-col items-center gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold ">{CategoryName}</h2>
              <p className="">This is a simple modal with a blue background.</p>
            </div>
            {CategoryName === "Parent_Category" && (
              <form className="flex flex-col gap-4 items-center w-full">
                <input
                  type="text"
                  className="px-3 py-2 rounded-md outline-none border-2 w-full bg-blue-800 text-white focus:border-gray-500"
                  placeholder="Add Parent Category"
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
                  onChange={handleFileChange} // Handler function for image upload
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
