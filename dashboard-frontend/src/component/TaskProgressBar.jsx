import React from "react";

const TaskProgressBar = ({ progress }) => {
  return (
    <div className="mt-4">
      <div className="bg-gray-600 h-2 rounded-full">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-white text-sm mt-2">{progress}% completed</p>
    </div>
  );
};

export default TaskProgressBar;