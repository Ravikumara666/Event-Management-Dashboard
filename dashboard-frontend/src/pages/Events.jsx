// Events.js
import React, { useState, useEffect } from "react";
import { getEvents } from "../utilities/aip"; // Assuming you have a separate file for API calls
import EventCard from "../component/EventCard";
import EventForm from "../component/EventForm"; // Assuming you have a separate component for the event form

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getEvents()
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowForm(false);
  };

  const handleDeleteSuccess = (deletedEventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== deletedEventId));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-6">Events</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Add Event
        </button>
      </div>
      {showForm && <EventForm onSubmit={handleAddEvent} />}
      <div className="space-y-6 mt-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onDeleteSuccess={handleDeleteSuccess} />
        ))}
      </div>
    </div>
  );
};

export default Events;