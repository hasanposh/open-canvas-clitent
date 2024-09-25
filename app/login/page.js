"use client";

import Link from "next/link";
import InputField from "../components/InputField/InputField";
import GoogleLogin from "../components/GoogleLogin/GoogleLogin";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("hello");
  };

  return (
    <div className="min-h-[calc(100vh-522px)] flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-black">
          Welcome Back!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            name={"email"}
            placeholder={"Your Mail Here"}
            label={"Email"}
            type={"email"}
          />
          <InputField
            name={"password"}
            placeholder={"Your Password Here"}
            label={"Password"}
            type={"password"}
          />

          <Link
            href="register"
            className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Account
          </Link>

          <button className="btn btn-primary w-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm text-sm font-medium">
            Login
          </button>
          <GoogleLogin />
        </form>
      </div>
    </div>
  );
};

export default page;
