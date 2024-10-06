'use client'

import React,{useState,useEffect} from 'react'
import NavbarNext from '../AppComponents/NavbarNext';
import CardNextUi from "../AppComponents/CardNextUi";
import Footer from "../AppComponents/FooterNext"
import axios from "axios"
const Categories = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [listing,setListing]=useState([])
    const [loading,setLoading]=useState(true)
    const fetchUserAllCategories = async (id) => {
      try {
        setLoading(true)
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user-listing/${id}`
        );
       
        console.log(response.data.data[0]);
        
        console.log("Api Data Listing",listing)
        return response.data.data[0]
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
      finally{
        setLoading(false)
      }
    };
  
   
    const handleCategorySelect = (id) => {
      setSelectedCategoryId(id);
      fetchUserAllCategories(id); 
    };

    useEffect(() => {
        const fetchData = async () => {
          if (selectedCategoryId) {
            const data = await fetchUserAllCategories(selectedCategoryId); 
            setListing(data); 
            console.log("listing UseState", data);
          }
        };
    
        fetchData();
        console.log("USesate",listing) 
      }, [selectedCategoryId]);
  return (
    <>
    <div className='min-h-screen flex flex-col '>
      <NavbarNext onCategorySelect={handleCategorySelect} />
      <div className="flex bg-[#0E0E11] flex-col md:flex-row justify-center gap-4 flex-wrap items-center ">
        <CardNextUi listing={listing} loading={loading}  />
        <CardNextUi />
        <CardNextUi />
       
      </div>
      <Footer />
      </div>
    </>

  )
}

export default Categories