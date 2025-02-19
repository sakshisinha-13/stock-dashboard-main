import { MoonIcon } from "@heroicons/react/16/solid";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const ThemeIcon = () => {
  const {darkMode,setDarkMode}=useContext(ThemeContext)
  const toggleDarkMode=()=>{
    setDarkMode(!darkMode)
    console.log("button clicked")
  }
  return (
    <button
    className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg ${
      darkMode ? "shadow-gray-800" : null
    } top-10`}
    onClick={toggleDarkMode}
    
  >
      <MoonIcon className={`h-8 w-8 cursor-pointer stroke-1 ${
          darkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : "fill-none stroke-neutral-400"
        }`}
      />
    </button>
  );
};

export default ThemeIcon;