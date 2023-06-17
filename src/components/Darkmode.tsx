import { useEffect, useState } from "react";

export const Darkmode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false
  });

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body?.classList.add("dark");
    } else {
      body?.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex items-center justify-center mt-4">
      <label
        htmlFor="darkModeToggle"
        className="flex items-center cursor-pointer"
      >
        <span className="mr-2 font-bold">Dark Mode</span>
        <input
          id="darkModeToggle"
          type="checkbox"
          checked={darkMode}
          onChange={handleDarkModeToggle}
          className="hidden"
        />
        <span className="relative">
          <span className="block w-10 h-6 bg-gray-400 rounded-full"></span>
          <span
            className={`absolute block w-4 h-4 bg-white rounded-full left-1 top-1 transition-transform ${
              darkMode ? "transform translate-x-4" : ""
            }`}
          ></span>
        </span>
      </label>
    </div>
  );
};
