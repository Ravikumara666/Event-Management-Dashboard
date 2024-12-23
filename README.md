Event Management Dashboard

Project Overview

The Event Management Dashboard is a comprehensive solution for managing events, attendees, and associated tasks. This project consists of two main components:
	1.	Event Management API (Backend): Developed in Spring Boot with PostgreSQL, this component supports full CRUD operations for events, attendees, and tasks.
	2.	Dashboard (Frontend): Built with React, the dashboard provides a user-friendly interface for managing events, attendees, and tasks, along with progress tracking.

Features

Backend - Event Management API

The backend is implemented using Spring Boot and a PostgreSQL database. It supports the following features:
	•	Retrieve all events: GET http://localhost:8080/events/allevents
	•	Create an event: POST http://localhost:8080/events/create
	•	Update an event: PUT http://localhost:8080/events/update/{id}
	•	Delete an event: DELETE http://localhost:8080/events/delete/{id}
	•	Similar endpoints exist for managing attendees and tasks.

Dependencies Used:
	•	Spring Web
	•	Spring Data JPA
	•	PostgreSQL Driver

Frontend - Dashboard

The frontend, developed in React, includes:
	•	Pages:
	•	Home Page: Provides an overview of events, attendees, and tasks with progress tracking.
	•	Events Page: List of all events with options to add, edit, and delete events.
	•	Attendees Page: List of all attendees with options to add, edit, and delete attendees.
	•	Tasks Page: List of all tasks with options to add, edit, and delete tasks.
	•	Interactive UI with React components for seamless user experience.

Screenshots and Video

Screenshots

![Home Page](screenshots/home-page.png)
![Events Page](screenshots/events-page.png)

Demo Video

[Watch Demo Video](https://youtu.be/demo-video-link)

Getting Started

Prerequisites
	•	Java 17 or above
	•	PostgreSQL Database
	•	Node.js and npm

Backend Setup
	1.	Navigate to the Event Management API folder:
       cd Event Management API
  2.	Configure your PostgreSQL database connection in application.properties.
	3.	Run the Spring Boot application:
       mvn spring-boot:run
       
Frontend Setup
	1.	Navigate to the dashboard-frontend folder:
       cd dashboard-frontend
  2.	Install dependencies:
      npm install
  3.	Start the development server:
      npm start
