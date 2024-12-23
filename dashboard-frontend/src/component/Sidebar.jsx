import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaCalendar, FaUsers, FaTasks } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 text-gray-800 dark:text-white text-2xl transition-transform duration-300 ${
          isOpen ? 'transform translate-x-56' : ''
        }`}
      >
        <FaBars />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-800 text-white z-40 transform transition-transform duration-300 ease-in-out w-64 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-8 pt-2">Dashboard</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <FaHome className="text-xl" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <FaCalendar className="text-xl" />
                  <span>Events</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/attendees"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <FaUsers className="text-xl" />
                  <span>Attendees</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tasks"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTasks className="text-xl" />
                  <span>Tasks</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;