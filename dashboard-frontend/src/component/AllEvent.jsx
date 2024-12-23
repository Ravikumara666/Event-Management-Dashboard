import React, { useEffect, useState } from 'react';

const AllEvent = ({ event }) => {
  // State declarations
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks when event changes
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:8080/tasks');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        const eventTasks = data.filter(task => task.event.id === event.id);
        setTasks(eventTasks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (event?.id) {
      fetchTasks();
    }
  }, [event]);

  // Helper functions
  const calculateProgress = () => {
    if (tasks.length === 0) return 0;
    const completedTasks = tasks.filter(task => task.status === 'Completed').length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  const getUniqueAttendees = () => {
    const attendees = tasks
      .map(task => task.attendee)
      .filter(attendee => attendee !== null);
    return [...new Map(attendees.map(item => [item.id, item])).values()];
  };

  // Loading and error states
  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  // Render component
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow">
      {/* Event Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          {event.name}
        </h2>
        <p className="text-gray-400 text-lg mb-4">
          {event.description}
        </p>
        <div className="space-y-2">
          <div className="text-gray-400">
            Location: {event.location}
          </div>
          <div className="text-gray-400">
            Date: {new Date(event.date).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Tasks Progress</span>
          <span className="text-gray-400">{calculateProgress()}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>
      </div>

      {/* Attendees Section */}
      <div className="mb-6">
        <h3 className="text-lg mb-3">
          Attendees
        </h3>
        <div className="flex flex-wrap gap-2">
          {getUniqueAttendees().map((attendee) => (
            <div
              key={attendee.id}
              className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2"
            >
              {attendee.name}
              <span className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Tasks Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg">Tasks</h3>
          <span className="text-gray-400">
            {tasks.filter(t => t.status === 'Completed').length}/{tasks.length} Completed
          </span>
        </div>
        <div className="space-y-2">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="flex items-center justify-between"
            >
              <span className="min-w-[200px]">
                {task.name}
              </span>
              <div className="w-full mx-4 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ 
                    width: task.status === 'Completed' ? '100%' : 
                           task.status === 'In Progress' ? '50%' : '25%' 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvent;