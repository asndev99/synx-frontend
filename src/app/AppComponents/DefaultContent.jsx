import React from "react";
import Card from "./Card";

const DefaultContent = () => {
  return (
    <div className="flex justify-center flex-wrap mx-4 my-4 gap-16">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default DefaultContent;
