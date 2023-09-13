const Codezang = () => {
    return (  
        <main className="p-5">
        <div className="flex justify-center space-x-3">
            <div className="h-16 w-16 bg-blue-200 rounded-full"></div>
            <div className="h-16 w-16 bg-blue-200 rounded-full"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3">
        <div className="bg-blue-400 h-12"></div> 
        <div className="bg-blue-400 h-12"></div>
        <div className="bg-blue-400 h-12"></div>
        </div>

        <div className="md:block hidden" >
            <p>I will apper for device solution 8px</p>
        </div>

        <div className="max-md:block hidden">
            <p>I will apper for device solution  768px</p>
        </div>
  <button className="my-2 rounded-lg bg-blue-400 px-3 py-3 text-white hover:bg-blue-500 focus:outline-none 
  focus:ring focus:ring-blue-300    active:bg-blue-800">
    click me 
  </button>

  <ul className="my-2 space-y-2">
    <li className="bg-white p-2 first:bg-yellow-100">Items 1</li>
    <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Items 1</li>
    <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Items 1</li>
    <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Items 1</li>
    <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Items 1</li>
    <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Items 1</li>


  </ul>
        </main>
    );
}
 
export default Codezang;