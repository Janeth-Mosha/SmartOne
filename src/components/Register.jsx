import React, { useState } from "react";
import logo from "../image/logo.png";
import google from "../image/google.png";
import register from "../image/register.png";
import { Link } from "react-router-dom";
// import home from '../image/hom.png'
// Import your CSS for styling

const RegisterForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Logged in with:", email, password, username);
  };

  return (
    <div>
      <div className="form-container flex ">
        <form onSubmit={handleSubmit}>
          <img src={logo} alt="" className="w-20 h-20 mx-20" />
          <h2 className="text-3xl ">Welcome Back</h2>
          <input
            className="w-20% m-2  p-2 rounded"
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            className="w-20% m-2 p-2 rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="w-20% m-2  p-2 rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white text-1.5xl scroll-ps-5  m-4  bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-700 rounded"
          >
            Register
          </button>

          <p>
              Have an Account?{" "}
            <a href="/login" className="text-blue-800 text-1xl">
              Login
            </a>
          </p>
          <div className="flex m-1  p-1">
          <i className="bi bi-google "></i>
            Sign in with
            <Link to="/sidebar">
              <p className="mx-2 items-center text-blue-700"> Google</p>
            </Link>
          </div>
        </form>
        <div className=" mx-4 w-1/2 px-4">
          <img src={register} alt="" className="mx-10 mt-10" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
