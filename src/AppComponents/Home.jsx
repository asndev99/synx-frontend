"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { PropagateLoader } from "react-spinners";

const Home = () => {
  const [AllCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchHomeCard = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("admin_token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/home`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.data;

      const cardsData = [
        { title: "Total Games", value: data.data.totalGames },
        { title: "Total Listings", value: data.data.totalListing },
        { title: "Total Categories", value: data.data.totalCategories },
        { title: "Total Users", value: data.data.totalUsers },
      ];

      return cardsData;
    } catch (error) {
      console.log(error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const data = await FetchHomeCard();
      setAllCategory(data);
    };

    getData();
  }, []);

  return (
    <div className="flex justify-center flex-wrap mx-4 my-4 gap-16">
      {loading ? (
        <PropagateLoader color="#3847f0" />
      ) : AllCategory.length === 0 ? (
        <h1>No data available</h1>
      ) : (
        AllCategory.map((category, index) => (
          <Card key={index} category={category} />
        ))
      )}
    </div>
  );
};

export default Home;
