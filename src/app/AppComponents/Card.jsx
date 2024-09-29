"use client";
import React from 'react'

const Card = () => {
  return (
    <div className="max-w-sm p-6 flex flex-col gap-2 items-center rounded-sm overflow-hidden shadow-xl bg-white">
    <div className="flex flex-col gap-2">
      <div className="font-bold text-xl mb-2">Title</div>
      <p className="text-gray-700 text-justify break-words">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, totam aliquam a placeat non, ullam cum cupiditate quia debitis est temporibus quidem repellendus recusandae illum ratione nemo eligendi distinctio accusamus, iure mollitia corrupti voluptatibus.
      </p>
    </div>
  </div>
  )
}

export default Card