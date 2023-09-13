import React from 'react';
import logo from '../image/logo.png';

import SidebarContent from './Sidebar-content';
import profile from '../image/Ellipse 14.png';
import notification from '../image/notification 4.png'
const Sidebar = () => {
  return (
    <div className="bg-custom-green text-white w-32 p-4 flex flex-col h-screen   sm:w-64">
         <div className=' h-4 bg-white w-screen mx-60 fixed p-10 flex top-0 ml-[990px]'>
         <img src={notification} alt='' className='h-7 w-7 mx-5  '  />
          <img src={profile} alt='' className='h-7 w-7 ' />
          <p className='mt-0 mx-3'>Twalibu Pembe</p>
         </div>

         <div className='h-4 bg-gray-100 w-[430px] ml-[255px] my-20  p-10 rounded flex sm:w-[1030px]'>
          <div className=' mx-2 text-center  '>
            <p className=' text-white bg-green-500 rounded-[100%]  text-center  w-[40px]'>2</p>
            </div>
            <div className=' font-bold  '><p>Group Details</p></div>
            
         </div>

         <div className=' bg-gray-100 sm:w-[1030px] ml-[255px] my-[180px] absolute top-2 left- p-[200px] rounded w-[430px] '>
          <form className='m-0'>
          <div className='absolute top-12 left-8'>
            <h1 className='font-bold text-2xl m-2'>GROUP DETAILS</h1>
          <label className='mx-11'>Group Name:</label> <input type='text' className='m-4 p-2 rounded' placeholder='enter your Name'/><br />
          <label className='mx-8'>Account Number:</label> <input type='text' className='m-4 p-2 rounded' placeholder='Account Number'/><br />
          <label className='mx-12'>Lipa Namba:</label> <input type='text' className='m-4 p-2 rounded' placeholder='Lipa Number'/><br />
          <label className='mx-16'></label><button type="submit" className='text-white text-1xl scroll-ps-5  px-10 py-2 m-4  bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-700 rounded'>Upload By-Laws</button>
          </div>

          </form>
         </div>
         
      <h1 className="text-2xl font-semibold text-white"><img src={logo}className='h-20 w-20 mx-14' alt='' /></h1>
      <ul className="mt-4 mx-10 flex-1 top-0">
        <li className="mb-2 flex">
        <i className="bi bi-house-door"></i>
          <a href="/" className="hover:text-white text-green font-bold mx-2">Home</a>
        </li>
        <li className="mb-2 flex ">
        <i className="bi bi-people-fill"></i>
          <a href="/Creategp" className="hover:text-white font-bold mx-2">Group</a>
        </li>
        <li className="mb-2 flex ">
        <i className="bi bi-cash-stack"></i>
          <a href="/Saving" className="hover:text-white font-bold mx-2">Saving</a>
        </li>

        <li className="mb-2 flex ">
        <i className="bi bi-bank"></i>
          <a href="/" className="hover:text-white font-bold mx-2">Investment</a>
        </li>
      </ul>
      <SidebarContent />
    </div>
    
  );
};

export default Sidebar;
