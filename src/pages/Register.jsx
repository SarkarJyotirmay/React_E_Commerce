import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "./firebase";
const auth = getAuth(app);

function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ type: "", text: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userDetail = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      setMessage({ type: "success", text: "Registered Successfully !" });
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
  }

  return (
    <>
      <div className="register-conrtainer border-1 w-full max-w-[450px] bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-4 m-auto my-18 p-4">
        {message.text && (
          <div className="message">
            <p
              className={`text-white ${
                message.type === "success" ? "bg-green-300" : "bg-red-300"
              }`}
            >
              {message.text}
            </p>
          </div>
        )}

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-white w-full p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Enter Your Password "
            name="password"
            value={form.password}
            onChange={handleChange}
            className="bg-white w-full p-2 rounded-md"
          />
          <button 
          type="submit"
          className="bg-blue-500 text-white text-lg font-semibold p-2 rounded-md cursor-pointer"
          >
            Register
            </button>
        </form>
        <p>
          Already have an account ? <Link to={"/login"} className="text-blue-400 hover:text-blue-800">Login</Link>
        </p>
      </div>
    </>
  );
}

export default Register;
