"use client";
import React from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const videoId = "AY5qcIq5u2g";
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const navLinks = (
    <>
      {navItems.map(({ label, path }) => (
        <Link href={path} key={label} className="relative group">
          <span
            className={`${
              pathname === path ? "text-red-700" : "hover:text-red-400"
            }`}
          >
            {label}
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </>
  );

  return (
    <div>
      <div className=" border-b-2  border-black ">
        <div className="navbar bg-base-100 py-8 max-w-[1440px] mx-auto">
          <div className="navbar-start hidden md:block">
            <div className="video-container relative flex gap-4">
              <a href={videoUrl} target="_blank">

              <Image
                src="https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg"
                alt="Example Image"
                width={100}
                height={100}
                className=" rounded cursor-pointer"
              />
              <FaPlayCircle className="absolute cursor-pointer left-8 top-4 text-base-300 text-4xl hover:scale-110 transition-all duration-300" />
              </a>
              <div>
                <h2 className="text-sm">
                  Trends of the SS24 with <br /> Joanne Allen
                </h2>
                <a href={videoUrl} target="_blank" className="">
                  view on Youtube
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-center">
            <Link href={"/"} className="font-extrabold text-2xl md:text-6xl">
              OpenCanvas
            </Link>
          </div>
          <div className="navbar-end">
            <ThemeToggleBtn />
          </div>
        </div>
      </div>
      <div className="border-b-2">
        <div className="navbar bg-base-100 max-w-[1440px] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl md:text-4xl">OpenCanvas</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-base gap-4 px-1">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              href="/login"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
