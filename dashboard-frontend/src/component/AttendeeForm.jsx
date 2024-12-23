import React, { useState } from "react";
import { addAttendee } from "../utilities/aip";

const AttendeeForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const attendeeData = { name, email };
    addAttendee(attendeeData).then((response) => onSubmit(response.data));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">Add Attendee</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-lg"
          placeholder="Attendee Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-lg"
          placeholder="Attendee Email"
        />
        <button type="submit" className="bg-green-500 hover:bg-green-700 px-6 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AttendeeForm;