import React from "react";

import { Link } from "react-router-dom";
import home from "../image/hom.png";
import user from "../image/user 1.png";
// import SidebarContent from './Sidebar-content';

import MyGroup from "./Mygroup";
import Saving from "./Saving";
import GreenSidebar from "../components/includes/GreenSidebar"

const CreateGroup = () => {
  return (
    <>
    <div className="bg-custom-green text-white w-64 p-4 flex flex-col h-screen ">



      <div className=" h-4 bg-white w-screen mx-60 fixed p-4 flex ml-[1100px]">
      <i className="bi bi-bell w-7 h-7"></i>
      <i className="bi bi-person-circle w-5"></i>
        <p className="text-xs  my-1 flex mx-2">Twalibu Pembe</p>
      </div>
     

      <div className="h-4 bg-gray-100 w-[1030px] ml-[255px] my-20 fixed p-10 rounded flex ">
        <div className=" mx-2 text-center  ">
          <p className=" text-white bg-green-500 rounded-[100%]  text-center  w-[40px]">
            2
          </p>
        </div>
        <div className=" font-bold">
          <p>Group detail</p>
        </div>
        <div className=" font-bold ml-[640px]">
          <p>Add Member</p>
        </div>
      </div>
     

      <div className=" bg w-[1030px] ml-[255px] my-[180px] absolute top-2 left- p-[200px] rounded ">
        <form className="m-0">
          <h1 className="font-bold text-2xl absolute top-4 left-36">
            MEMBER'S CREDENTIALS
          </h1>
          <img src={user} alt="" className="h-40 w-40 -mt-28" />
          <div className="absolute top-12 left-[450px]">
            <label className="mx-11">Full Name:</label>{" "}
            <input
              type="text"
              className="m-4 p-2 rounded shadow-xl bg-gray-100"
              placeholder="enter your Name"
            />
            <br />
            <label className="mx-6">Phone Number:</label>{" "}
            <input
              type="text"
              className="m-4 p-2 rounded shadow-xl bg-gray-100"
              placeholder="Account Number"
            />
            <br />
            <label className="mx-16">Email:</label>{" "}
            <input
              type="email"
              className="m-4 p-2 rounded shadow-xl bg-gray-100"
              placeholder="Lipa Number"
            />
            <br />
            <label className="mx-14">Position:</label>{" "}
            <input
              type="text"
              className="m-4 p-2 rounded shadow-xl bg-gray-100"
              placeholder="Position"
            />
            <br />
           
            <button
              type="file"
              className="text-white text-1xl scroll-ps-5  px-10 py-2 ml-48  bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-700 rounded"
            >
              Upload By-Laws
            </button>
          </div>
        </form>
      </div>
      
      <GreenSidebar/>
      </div>
      </>
     

      

      

  );
};

export default CreateGroup;
