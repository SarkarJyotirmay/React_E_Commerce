import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      setMessage({ type: "success", text: "Login successfull !" });
      navigate("/");
    } catch (e) {
      setMessage({ type: "error", text: e.message });
    }
  }
  return (
    <>
      <div className="login-conrtainer border-1 w-full max-w-[450px] bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-4 m-auto my-18 p-4">
        {message.text && (
          <div className="message w-full">
            <p
              className={`text-white p-2 rounded-md ${
                message.type === "success" ? "bg-green-300" : "bg-red-500"
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
            type="email"
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
            Login
          </button>
        </form>
        <p>
          Already have an account ?{" "}
          <Link to={"/register"} className="text-blue-400 hover:text-blue-800">
            Register Now
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
