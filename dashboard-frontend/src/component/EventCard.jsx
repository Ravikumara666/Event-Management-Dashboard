// EventCard.js
import React, { useState } from "react";
import axios from "axios";

const EventCard = ({ event, onDeleteSuccess }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/events/delete/${event.id}`);
      onDeleteSuccess(event.id); 
    } catch (error) {
      setError("Failed to delete event. Please check your internet connection and try again.");
      console.error("Error deleting event:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-semibold">{event.name}</h3>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
            onClick={() => setShowEdit(!showEdit)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
      <p className="mt-4 text-xl">{event.description}</p>

      <div className="mt-4">
        <p className="text-lg font-medium">Location: {event.location}</p>
        <p className="text-lg font-medium">Date: {new Date(event.date).toLocaleDateString()}</p>
      </div>

      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default EventCard;

