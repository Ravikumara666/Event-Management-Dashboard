import React, { useState } from "react";

const EventForm = ({ onSubmit }) => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility
  const [eventId, setEventId] = useState(null); // State to store the eventId from backend

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      name: eventName,
      description,
      location,
      date,
    };

    try {
      const response = await fetch("http://localhost:8080/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const result = await response.json();
      setStatusMessage("Event created successfully!");
      setEventId(result.id); // Assuming the backend sends back the eventId in result.id
      onSubmit(result);

      // Open the success modal after successful event creation
      setIsModalOpen(true);
    } catch (error) {
      setStatusMessage("Error creating event. Please try again.");
      console.error(error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6">Add Event</h2>
        <div className="space-y-4">
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full p-2 rounded-lg"
            placeholder="Event Name"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded-lg"
            placeholder="Event Description"
            required
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 rounded-lg"
            placeholder="Event Location"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>

      {statusMessage && <p>{statusMessage}</p>}

      {/* Modal for success message */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-xl font-semibold">Event Created Successfully!</h2>
            <p>Your event has been created and saved.</p>
            <p>Event ID: {eventId}</p> {/* Displaying the eventId */}
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventForm;