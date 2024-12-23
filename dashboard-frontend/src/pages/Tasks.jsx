import React, { useState, useEffect } from "react";
import { getTasks } from "../utilities/aip"; // Replace with the actual API call
import TaskCard from "../component/TaskCard";
import TaskForm from "../component/TaskForm"; // You can add a form component to add tasks

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Fetch tasks on component mount
  useEffect(() => {
    getTasks().then((response) => setTasks(response.data)); // Replace with actual API call
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowForm(false); // Close form after adding task
  };

  return (
    <div>
      <TaskCard/>
      {/* <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>

      {/* Render TaskForm when showForm is true */}
      {/* {showForm && <TaskForm onSubmit={handleAddTask} />}

      {/* Render tasks */}
      {/* <div className="space-y-6 mt-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))} */}
      {/* </div>  */}
    </div>
  );
};

export default Tasks;