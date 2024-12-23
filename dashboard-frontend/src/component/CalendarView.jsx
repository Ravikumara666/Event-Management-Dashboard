import React, { useState, useEffect } from "react";

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [markedDates, setMarkedDates] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await fetch("/api/events").then((res) => res.json());
      setEvents(eventData);
      const dates = eventData.map((event) => new Date(event.date));
      setMarkedDates(dates);
    };
    fetchEvents();
  }, []);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const isEventDate = (date) => {
    return markedDates.some(markedDate => 
      markedDate.getDate() === date &&
      markedDate.getMonth() === currentDate.getMonth() &&
      markedDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = 
        day === new Date().getDate() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear();

      const hasEvent = isEventDate(day);

      days.push(
        <div
          key={day}
          className={`h-10 flex flex-col items-center justify-center relative
            ${isToday ? 'bg-gray-700 rounded-lg' : ''}
            ${hasEvent ? 'text-red-500 font-bold' : 'text-white'}
            hover:bg-gray-700 rounded-lg cursor-pointer transition-colors`}
        >
          {day}
          {hasEvent && (
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full absolute bottom-1" />
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-900 rounded-lg p-4 border border-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => navigateMonth(-1)}
            className="px-3 py-1 text-white bg-gray-800 rounded hover:bg-gray-700"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-3 py-1 text-white bg-gray-800 rounded hover:bg-gray-700"
          >
            Today
          </button>
          <button
            onClick={() => navigateMonth(1)}
            className="px-3 py-1 text-white bg-gray-800 rounded hover:bg-gray-700"
          >
            →
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-center text-gray-400 text-sm font-semibold">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default EventCalendar;