import React, { useState } from 'react';
import { FaBeer } from "react-icons/fa";
import { SiAmazongames } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import Image from 'next/image';

export default function SideBar({onCategoryChange}) {
    
    return (
        <div className="w-64 h-screen bg-white p-4 border-r border-gray-300">
            <div className="flex items-center">
                <Image />
                <h2 className="text-blue-500 text-lg font-bold mb-4">Synx</h2>

            </div>
            <ul className="text-gray-800 p-2 flex flex-col gap-2">
                <li className="flex items-center py-2 hover:bg-gray-100 hover:cursor-pointer rounded border-b border-gray-200">
                    <div className='flex gap-2 items-center' onClick={()=>onCategoryChange("Games")}>
                        <SiAmazongames className="h-5 w-5 mr-2 text-blue-500" />
                        <p>Games</p>
                    </div>
                </li>
                <li className="flex items-center py-2 hover:bg-gray-100 hover:cursor-pointer rounded border-b border-gray-200">
                    <div className='flex gap-2 items-center' onClick={()=>onCategoryChange("Listing")}>
                    <MdCategory className="h-5 w-5 mr-2 text-blue-500" />
                    <p>Listing</p>
                    </div>
                </li>
                <li className="flex items-center py-2 hover:bg-gray-100 hover cursor-pointer rounded">
                    <div className='flex gap-2 items-center' onClick={()=>onCategoryChange('Parent-Category')}>
                    <BiCategory className="h-5 w-5 mr-2 text-blue-500" />
                    <p>Parent Category</p>
                    </div>
                    
                </li>
            </ul>
        </div>
    );
}
