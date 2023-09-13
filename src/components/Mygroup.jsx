
import logo from "../image/logo.png";

import groups from "../image/groups.png";


import { Link } from "react-router-dom";

const MyGroup = () => {
  return (
    <div>
      <div class="  bg-custom-green text-white h-screen w-1/5 fixed top-0 left-0 overflow-y-auto">
        <div class="p-4">
          <img src={logo} alt="" className="h-40 w-40" />
          <ul class="mt-4">
            <li class="mb-2">
              <a href="/" class="block py-2  hover:bg-gray-100">
                Home
              </a>
            </li>
            <li class="mb-2">
              <a href="/" class="block py-2  hover:bg-gray-100">
                Group
              </a>
            </li>
            <li class="mb-2">
              <a href="/Creategp" class="block py-2  hover:bg-gray-100">
                Create Group
              </a>
            </li>
            <li class="mb-2">
              <a href="/Mygroup" class="block py-2  hover:bg-gray-100">
                My Group
              </a>
            </li>
            <li class="mb-2">
              <a href="/Bylaws" class="block py-2  hover:bg-gray-100">
                By laws
              </a>
            </li>
            <li class="mb-2">
              <a href="/Saving" class="block py-2  hover:bg-gray-100">
                Saving
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-1/5 p-4  flex justify-end ">
      <i className="bi bi-bell w-7 h-7"></i>
      <i className="bi bi-person-circle w-5"></i>
        <p className=" text-xs  my-1 flex mx-2 ">Twalibu Pembe</p>
      </div>

      <div className="ml3/5  flex justify-center">
        <div className="bg-gray-300 h-14  w-11/12 relative left-24  mx-48  rounded-full  ">
          <h1 className="flex justify-start p-4 text-2xl font-extrabold">
            My Groups
          </h1>
        </div>
      </div>

      <div className="ml3/5  my-4 flex justify-center">
        <div className="bg-gray-100 h-full  w-11/12 relative left-24  mx-48  rounded  ">
          <div className="grid grid-cols-2 gap-10 m-10 justify-center">
            <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <h1 className="text-2xl font-extrabold">
                  Maendeleo Saccoss Group
                </h1>
                <Link to="/GroupDet">
                  <img
                    src={groups}
                    alt="Placeholder "
                    class="w-16 h-16  rounded-md"
                  />
                </Link>
              </div>
              <div class="text-gray-800">
                <h2 className="text-xl font-semibold mb-2">ID:#002</h2>
                <p>Members: 120</p>
              </div>
              <div className="mt-4">
                <p className="text-black text-sm">Created: 14/04/2022</p>
              </div>
            </div>

            <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <h1 className="text-2xl font-extrabold">
                  Mtakuja Saccoss Group
                </h1>
                <img
                  src={groups}
                  alt="Placeholder "
                  class="w-16 h-16 rounded-md"
                />
              </div>
              <div class="text-gray-800">
                <h2 className="text-xl font-semibold mb-2">ID:#002</h2>
                <p>Members: 120</p>
              </div>
              <div className="mt-4">
                <p className="text-black text-sm">Created: 14/04/2022</p>
              </div>
            </div>

            <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <h1 className="text-2xl font-extrabold">
                  Wonder Saccoss Group
                </h1>
                <img
                  src={groups}
                  alt="Placeholder "
                  class="w-16 h-16  rounded-md"
                />
              </div>
              <div class="text-gray-800">
                <h2 className="text-xl font-semibold mb-2">ID:#002</h2>
                <p>Members: 120</p>
              </div>
              <div className="mt-4">
                <p className="text-black text-sm">Created: 14/04/2022</p>
              </div>
            </div>

            <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <h1 className="text-2xl font-extrabold">
                  Tunasepa Saccoss Group
                </h1>
                <img
                  src={groups}
                  alt="Placeholder "
                  class="w-16 h-16  rounded-md"
                />
              </div>
              <div class="text-gray-800">
                <h2 className="text-xl font-semibold mb-2">ID:#002</h2>
                <p>Members: 120</p>
              </div>
              <div className="mt-4">
                <p className="text-black text-sm">Created: 14/04/2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGroup;
