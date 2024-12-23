import React, { useState, useEffect } from 'react';
import { getEvents } from '../utilities/aip'; // Ensure the API utility is correctly imported
import CalendarView from '../component/CalendarView';
import AllEvent from '../component/AllEvent';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response.data); // Ensure the backend API returns the correct structure
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Loading state
  if (loading) {
    return <div className="text-center text-white">Loading events...</div>;
  }

  // No events state
  if (events.length === 0) {
    return <div className="text-center text-gray-400">No events found.</div>;
  }

  return (
    <>
      {/* Event Management Banner */}

      {/* GIF below the banner */}
      <div className="flex justify-center my-6">
  <video
    loop
    autoPlay
    muted  // Often required for autoplay to work, especially on mobile
    className="w-full h-auto object-cover rounded-lg shadow-lg"
  >
    <source
      src="https://www.shutterstock.com/shutterstock/videos/3482125683/preview/stock-footage-social-media-events-and-content-planning-concept-social-media-planner-organization-management.webm"
      type="video/webm"
    />
    Your browser does not support the video tag.
  </video>
</div>

      <div className="container mx-auto px-4 py-8 flex gap-4">
        {/* Events List Section */}
        <div className="w-3/4">
          <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <AllEvent key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Calendar View Section */}
        <div className="w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Event Calendar</h2>
          <CalendarView events={events} />
        </div>
      </div>
    </>
  );
};

export default Home;