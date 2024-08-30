"use client";

import { useEffect, useState } from "react";

const ThemeToggleBtn = () => {
  const [theme, setTheme] = useState("winter");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check the user's saved theme in localStorage
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
    
    // Close the dropdown after selecting an item
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        Select Theme
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li><a onClick={() => selectTheme("lofi")}>Lofi</a></li>
          <li><a onClick={() => selectTheme("night")}>Night</a></li>
          <li><a onClick={() => selectTheme("retro")}>Retro</a></li>
          <li><a onClick={() => selectTheme("forest")}>forest</a></li>
        </ul>
      )}
    </div>
  );
};

export default ThemeToggleBtn;
