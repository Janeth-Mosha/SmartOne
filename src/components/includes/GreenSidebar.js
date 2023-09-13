import logo from "../../image/logo.png";


export default function GreenSidebar() {
  return (
    <div className="bg-custom-green text-white h-full">
      <h1 className="text-2xl font-semibold text-white">
        <img src={logo} className="w-40" alt="" />
      </h1>
      <ul className="mt-4 mx-10 flex-1 text-white">
        <li className="mb-2 flex">
        <i className="bi bi-house-door"></i>
          <a href="/" className="hover:text-white font-bold mx-2">
            Home
          </a>
        </li>
        <li className="mb-2 flex ">
        <i className="bi bi-people-fill"></i>
          <a href="/Creategp" className="hover:text-white font-bold mx-2">
            Group
          </a>
        </li>

        <li className="mb-2 flex ">
        <i className="bi bi-people-fill"></i>
          <a href="/MyGroup" className="hover:text-white font-bold mx-2">
            New group
          </a>
        </li>

        <li className="mb-2 flex ">
        <i class="bi bi-file-earmark-ruled"></i>
          <a href="/bylaws" className="hover:text-white font-bold mx-2">
            {" "}
            Bylaws
          </a>
        </li>
        <li className="mb-2 flex ">
        <i className="bi bi-cash-stack"></i>
          <a href="/Saving" className="hover:text-white font-bold mx-2">
            Saving
          </a>
        </li>

        <li className="mb-2 flex ">
        <i className="bi bi-bank"></i>
          <a href="/investment" className="hover:text-white font-bold mx-2">
            Investment
          </a>
        </li>
      </ul>
    </div>
  );
}
