import React, { useState } from "react";
import { createTask } from "../utilities/aip";

const TaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      name: taskName,
      description,
      progress,
    };
    createTask(taskData).then((response) => onSubmit(response.data));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">Add Task</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full p-2 rounded-lg"
          placeholder="Task Name"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded-lg"
          placeholder="Task Description"
        />
        <input
          type="number"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          className="w-full p-2 rounded-lg"
          placeholder="Task Progress"
          min="0"
          max="100"
        />
        <button type="submit" className="bg-green-500 hover:bg-green-700 px-6 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TaskForm;