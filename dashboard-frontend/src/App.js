import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";
import EventCalendar from "./component/CalendarView";
import Attendees from "./pages/Attendees"; // Import your Attendees page
import TaskCard from "./component/TaskCard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Sidebar />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 p-4 transition-all duration-200">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<EventCalendar />} />
                <Route path="/events" element={<Events />} />
                <Route path="/attendees" element={<Attendees />} /> {/* Updated */}
                <Route path="/tasks" element={<TaskCard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;