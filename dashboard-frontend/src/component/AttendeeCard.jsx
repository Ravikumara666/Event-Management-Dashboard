import React from "react";

const AttendeeCard = ({ attendee, onDelete }) => {
  return (
    <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">{attendee.name}</h3>
        <button
          className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded"
          onClick={() => onDelete(attendee.id)}
        >
          Delete
        </button>
      </div>
      <p className="mt-4">{attendee.email}</p>
      <p className="text-sm mt-2">
        Event: {attendee.event.name} ({attendee.event.location})
      </p>
    </div>
  );
};

export default AttendeeCard;