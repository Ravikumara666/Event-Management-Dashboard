import React, { useEffect, useState } from "react";
import { updateTaskStatus } from "../utilities/aip"; // Ensure this function is implemented

const TaskCard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks data when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:8080/tasks");
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        setTasks(data); // Set tasks data directly
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Handle status change for a task
  const handleStatusChange = (taskId, status) => {
    updateTaskStatus(taskId, status).then(() => {
      // Optionally update task status in the state or notify parent component
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, status } : task
        )
      );
    });
  };

  // Loading and error states
  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  // Render task cards for each task
  return (<>
      <h1 className="text-3xl font-bold text-white mb-6">Tasks</h1>
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">{task.name}</h3>
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
                onClick={() => handleStatusChange(task.id, "In Progress")}
              >
                In Progress
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
                onClick={() => handleStatusChange(task.id, "Completed")}
              >
                Completed
              </button>
            </div>
          </div>
          <p className="mt-4">{task.description}</p>
          <div className="mt-4">
            {/* Add your task progress bar here */}
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${task.progress}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TaskCard;