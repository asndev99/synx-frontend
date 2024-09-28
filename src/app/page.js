// import {Forms } from "flowbite-react";
import Form from "./AppComponents/Form";
import RightMenu from "./AppComponents/RightMenu";
import SideBar from "./AppComponents/SideBar";

export default function Home() {
  return (
    <div className="flex w-full"> 
      <SideBar/>
      <RightMenu/>
    </div>

  );
}
