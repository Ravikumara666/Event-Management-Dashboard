import React, { useState, useEffect } from "react";
import axios from "axios";
import AttendeeCard from "../component/AttendeeCard";
import AttendeeForm from "../component/AttendeeForm"; // Import the AttendeeForm component

const Attendees = () => {
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false); // To toggle the form visibility

  // Fetch attendees from the server
  const fetchAttendees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/attendees");
      setAttendees(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load attendees.");
      console.error("Error fetching attendees:", err);
      setLoading(false);
    }
  };

  // Delete attendee
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/attendees/${id}`);
      setAttendees(attendees.filter((attendee) => attendee.id !== id));
    } catch (error) {
      console.error("Error deleting attendee:", error);
    }
  };

  // Handle adding a new attendee
  const handleAddAttendee = (newAttendee) => {
    setAttendees([...attendees, newAttendee]);
    setShowForm(false); // Hide the form after successful submission
  };

  useEffect(() => {
    fetchAttendees();
  }, []);

  if (loading) {
    return <p className="text-gray-400 text-center">Loading attendees...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (attendees.length === 0) {
    return <p className="text-gray-400 text-center">No attendees found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Attendees</h1>
        
        {/* Button to toggle the form visibility */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Add Attendee
          </button>
        </div>
        
        {/* Show AttendeeForm when showForm is true */}
        {showForm && <AttendeeForm onSubmit={handleAddAttendee} />}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {attendees.map((attendee) => (
            <AttendeeCard
              key={attendee.id}
              attendee={attendee}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendees;