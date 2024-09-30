'use client';

import { useState } from 'react';

export default function addGameModal({ isOpen, onClose, parentCategoryId }) {
    const [gameName, setGameName] = useState('');
    const [imageUrls, setImageUrls] = useState(['']);

    const addImageUrl = () => {
        setImageUrls([...imageUrls, '']);
    };

    const handleImageUrlChange = (index, value) => {
        const newImageUrls = [...imageUrls];
        newImageUrls[index] = value;
        setImageUrls(newImageUrls);
    };

    const handleSubmit = () => {
        const newGameData = {
            name: gameName,
            imageUrls,
        };
        console.log('New Game Data:', newGameData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h3 className="text-lg font-semibold mb-4">Add New Game</h3>

                {/* Input for Game Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Game Name</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                        placeholder="Enter game name"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                    />
                </div>
                {imageUrls.map((url, index) => (
                    <div className="mb-4" key={index}>
                        <label className="block text-sm font-medium text-gray-700">Image URL {index + 1}</label>
                        <input
                            type="text"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                            placeholder={`Enter image URL ${index + 1}`}
                            value={url}
                            onChange={(e) => handleImageUrlChange(index, e.target.value)}
                        />
                    </div>
                ))}

                <button
                    onClick={addImageUrl}
                    className="mb-4 inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200"
                >
                    Add Another Image
                </button>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={handleSubmit}
                        className="inline-flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-500"
                    >
                        Save Game
                    </button>
                    <button
                        onClick={onClose}
                        className="inline-flex justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
