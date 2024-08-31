"use client";

import { useEffect, useState } from "react";

const ThemeToggleBtn = () => {
  const [theme, setTheme] = useState("winter");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const selectTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="relative inline-block text-lg group m-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 bg-gray-50 rounded-lg"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative">Select Theme</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
        ></span>
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => selectTheme("lofi")}>Lofi</a>
          </li>
          <li>
            <a onClick={() => selectTheme("night")}>Night</a>
          </li>
          <li>
            <a onClick={() => selectTheme("retro")}>Retro</a>
          </li>
          <li>
            <a onClick={() => selectTheme("forest")}>Forest</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ThemeToggleBtn;
