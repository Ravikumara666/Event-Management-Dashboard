import React, { useEffect } from "react";
import { FaMoon, FaSun, FaQuestion } from "react-icons/fa";

const Navbar = () => {
  // Check system preference and localStorage on mount
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", isDark);
  };

  const showHelp = () => {
    alert("Need help? Contact support@example.com");
  };

  return (
    <nav className="sticky top-0 z-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-lg">Event Management</div>
        
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {document.documentElement.classList.contains("dark") ? (
                <FaSun className="text-xl" />
              ) : (
                <FaMoon className="text-xl" />
              )}
            </button>
            <button
              onClick={showHelp}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200"
            >
              <FaQuestion />
              <span>Help</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;