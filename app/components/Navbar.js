import React from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import Link from "next/link";

const Navbar = () => {
  const videoId = "AY5qcIq5u2g"; // Replace with your video ID
  // const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <div className=" border-b-2 border-black ">
        <div className="navbar bg-base-100 py-8 max-w-[1440px] mx-auto">
          <div className="navbar-start hidden md:block">
            <div className="video-container flex gap-4">
              <iframe
                width="260"
                height="auto"
                src={videoUrl}
                title="FLYING OVER JAPAN (4K UHD) Amazing Beautiful Nature Scenery with Relaxing Music | 4K VIDEO ULTRA HD"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div>
                <h2 className="text-sm">
                  Trends of the SS'24 with <br /> Joanne Allen
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
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl">OpenCanvas</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
