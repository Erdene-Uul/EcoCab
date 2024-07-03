import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    axios
      .post("http://172.20.10.6:4000/api/v1/user/login", {
        email: phone,
        password,
      })
      .then((response) => {
        console.log("Login successful", response.data);
        // Handle success, e.g., redirect to login page or display a success message
      })
      .catch((error) => {
        console.error("Error registering user", error);
        // Handle error, e.g., display an error message
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Mail
          </label>
          <input
            type="text"
            id="mail"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={onSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
