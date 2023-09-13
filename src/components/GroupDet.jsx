// import React from 'react';
import logo from '../image/logo.png';
// import group  from '../image/group.png'
// import save from '../image/investi.png'
// import investment from '../image/save.png'
import mpesa from '../image/mpesa.png'
// import SidebarContent from './Sidebar-content';
 import profile from '../image/Ellipse 14.png';
 import notification from '../image/notification 4.png'

const GrooupDetail = () => {
    return ( 
        <div>
        <div class="bg-custom-green text-white h-screen w-1/5 fixed top-0 left-0 overflow-y-auto">
            
            <div class="p-4">
          <img src={logo} alt="" className='h-40 w-40' />
                <ul class="mt-4">
                    <li class="mb-2">
                        <a href="/" class="block py-2  hover:bg-gray-100">Home</a>
                    </li>
                    <li class="mb-2">
                        <a href="/" class="block py-2  hover:bg-gray-100">Group</a>
                    </li>
                    <li class="mb-2">
                        <a href="/Creategp" class="block py-2  hover:bg-gray-100">Create Group</a>
                    </li>
                    <li class="mb-2">
                        <a href="/Mygroup" class="block py-2  hover:bg-gray-100">My Group</a>
                    </li>
                    <li class="mb-2">
                        <a href="/Saving" class="block py-2  hover:bg-gray-100">Saving</a>
                    </li>
                </ul>
            </div>
        </div>
        
      
        <div className="ml-1/5 p-4  flex justify-end">
            <img src={notification} alt="" className='h-6 w-6 mx-3 my-1' />
             <img src={profile} alt=""  className='h-10 w-10'/>
               
                <p className="text-1xl font-semibold  my-1 flex mx-2 ">Twalibu Pembe</p>

        </div>

<div className='ml3/5  flex justify-center'>
    <div className="bg-gray-300 h-14  w-11/12 relative left-24  mx-48  rounded-full  ">
       <h1 className='flex justify-start p-4 text-2xl font-extrabold'>Maendeleo Group</h1>
    </div>
    
</div>


<div className='ml3/5  my-4 flex justify-center'>
    <div className="bg-gray-300 h-16  w-11/12 relative left-24  mx-48  rounded  ">
      <div className="m-5 mx-12 flex space-between ">
        <strong className=" bg-green-700 py-2  px-6  mx-4 rounded-full">2</strong>
        <strong className="text-green-800">Group Details</strong>
        <strong className=" mx-60">2  Views ByLaw</strong>
      
       </div>
    </div>

    
</div>

<div className='ml3/5  my-4 flex justify-center'>
    <div className="bg-gray-100 h-full  w-11/12 relative left-24  mx-48  rounded  ">
    <div className="grid grid-cols-2 gap-10 m-10 justify-center">

            <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <h1 className='text-2xl font-extrabold'>Group Details</h1>
            </div>
            <div class="text-gray-800">
                <p className=" font-semibold mb-2">Group name: <span className='text-2xl font-extrabold'> Maendeleo Group</span> </p>
                <p className=" font-semibold mb-2">Account no: <span className='text-2xl font-extrabold'>012345678902</span></p>
                <p className='font-semibold mb-2 flex '>Lipa namba<span className='flex '>
                    <img src={mpesa} alt=""  className='h-8 '/>
                    <strong className='text-1.5xl font-extrabold'>139788</strong></span></p>
                    <button type="submit" className='text-white text-1xl scroll-ps-5  m-4  bg-gradient-to-r from-green-500 to-green-600  font-extrabold px-4 p-2 rounded'>Edit</button>

            </div>
            <div className="mt-4">
                <p className="text-blue-500 hover">Year Created 2002</p>
                
            </div>
        </div>

        </div>  
        
   <div>

    <div class="container mx-auto p-20">
       <table class="min-w-full border border-gray-300 divide-y divide-gray-300">
    <thead>
        <tr>
            <th class="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Id</th>
            <th class="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Email</th>
            <th class="px-12 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">FullName</th>
            <th class="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Position</th>
            <th class="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">PhoneNumber</th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="px-6 py-4 whitespace-no-wrap">#001</td>
            <td class="px-6 py-4 whitespace-no-wrap">mimi@gmail.com</td>
            <td class="px-6 py-4 whitespace-no-wrap">Juma Sele</td>
            <td class="px-6 py-4 whitespace-no-wrap">Chair</td>
            <td class="px-6 py-4 whitespace-no-wrap">0623890789</td>
        </tr>
        <tr>
            <td class="px-6 py-4 whitespace-no-wrap">#002</td>
            <td class="px-6 py-4 whitespace-no-wrap">Janeth@gmail.com</td>
            <td class="px-6 py-4 whitespace-no-wrap">Janeth Mosha</td>
            <td class="px-6 py-4 whitespace-no-wrap">Chair</td>
            <td class="px-6 py-4 whitespace-no-wrap">0746520222</td>
        
        </tr>
       
    </tbody>
    
</table>

    </div>
    <div className='flex  justify-center'>
    <button type="submit" className='text-white text-1xl scroll-ps-5  m-4  bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-700 px-4 py-2  rounded'>Remove</button>
    </div>
   </div>
  
    </div> 
</div>
   </div>
     );
}
 
export default GrooupDetail;