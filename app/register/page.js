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
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg my-8 px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-black">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            name={"name"}
            placeholder={"Your Name Here"}
            label={"Name"}
            type={"text"}
          />
          <InputField
            name={"photo"}
            placeholder={"Your Photo Here"}
            label={"Photo"}
            type={"file"}
          />
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

          <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            You have an account?
            <Link href="login" className="text-xs ml-2 text-indigo-500 ">
              Login here
            </Link>
          </span>

          <button className="btn btn-primary w-full focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm text-sm font-medium">
            Create
          </button>
        </form>
        <div className="py-4">
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default page;
