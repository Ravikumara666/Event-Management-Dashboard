import axios from 'axios';

const API_URL = 'http://localhost:8080';  // Replace with actual API URL

// Event APIs
export const getEvents = () => axios.get(`${API_URL}/events/allevents`);
export const createEvent = (eventData) => axios.post(`${API_URL}/events/create`, eventData);
export const updateEvent = (id, eventData) => axios.put(`${API_URL}/events/update/${id}`, eventData);
export const deleteEvent = (id) => axios.delete(`${API_URL}/events/delete/${id}`);

// Attendee APIs
export const getAttendees = () => axios.get(`${API_URL}/attendees`);
export const addAttendee = (attendeeData) => axios.post(`${API_URL}/attendees/add`, attendeeData);
export const removeAttendee = (id) => axios.delete(`${API_URL}/attendees/delete/${id}`);

// Task APIs
export const getTasks = (eventId) => axios.get(`${API_URL}/tasks/${eventId}`);
export const createTask = (taskData) => axios.post(`${API_URL}/tasks`, taskData);
export const updateTaskStatus = (taskId, status) => axios.put(`${API_URL}/tasks/${taskId}/status`, { status });