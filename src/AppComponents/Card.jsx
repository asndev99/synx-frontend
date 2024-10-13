"use client";
import React from "react";

const Card = ({ category }) => {
  return (
    <div className="w-[30vw] p-6 flex flex-col gap-10 items-center rounded-sm overflow-hidden shadow-xl bg-white select-none cursor-pointer">
      <div className="flex flex-col items-center gap-2">
        <div className="font-bold text-2xl mb-2">{category.title}</div>
        <h2 className="text-2xl text-blue-700 font-semibold">
          {category.value}
        </h2>
      </div>
    </div>
  );
};

export default Card;
