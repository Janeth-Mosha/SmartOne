import React, { useState } from "react";
import login from "../image/rogin.png";
import logo from "../image/logo.png";

import axios from "axios";
// Import your CSS for styling

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/userInfo", { email, password });
    // Perform login logic here
    console
      .log("Logged in with:", email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {" "}
     
      <div className="form-container flex">
        <form onSubmit={handleSubmit}>
          <img src={logo} alt="" className="w-20 h-20 mx-20" />
          <h2 className="text-3xl">Get started Now</h2>
          <input
            className="w-20% m-1  p-2 rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-20% m-1  p-2 rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white text-1.5xl  m-5 p-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-500 hover:to-green-700 rounded "
          >
            Login
          </button>

          <p>
            {" "}
            Don't have an account?{" "}
            <a href="/Register" className="text-blue-800 text-0.4xl">
              Create one
            </a>
          </p>
        </form>
        <div className="w-1/2 px-4">
          <img src={login} alt="" className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
