<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <div class="container">
        <h1>Event Management Dashboard</h1>

 <div class="section">
            <h2>Project Overview</h2>
            <p>
                The <strong>Event Management Dashboard</strong> is a comprehensive solution for managing events, attendees, and associated tasks. This project consists of two main components:
            </p>
            <ul>
                <li><strong>Event Management API (Backend):</strong> Developed in Spring Boot with PostgreSQL, this component supports full CRUD operations for events, attendees, and tasks.</li>
                <li><strong>Dashboard (Frontend):</strong> Built with React, the dashboard provides a user-friendly interface for managing events, attendees, and tasks, along with progress tracking.</li>
            </ul>
        </div>

 <div class="section">
            <h2>Features</h2>
            <h3>Backend - Event Management API</h3>
            <p>The backend is implemented using <strong>Spring Boot</strong> and a <strong>PostgreSQL database</strong>. It supports the following features:</p>
            <ul>
                <li>Retrieve all events: <span class="code-block">GET http://localhost:8080/events/allevents</span></li>
                <li>Create an event: <span class="code-block">POST http://localhost:8080/events/create</span></li>
                <li>Update an event: <span class="code-block">PUT http://localhost:8080/events/update/{id}</span></li>
                <li>Delete an event: <span class="code-block">DELETE http://localhost:8080/events/delete/{id}</span></li>
                <li>Similar endpoints exist for managing attendees and tasks.</li>
            </ul>
            <p><strong>Dependencies Used:</strong></p>
            <ul>
                <li>Spring Web</li>
                <li>Spring Data JPA</li>
                <li>PostgreSQL Driver</li>
            </ul>

 <h3>Frontend - Dashboard</h3>
            <p>The frontend, developed in <strong>React</strong>, includes:</p>
            <ul>
                <li><strong>Home Page:</strong> Provides an overview of events, attendees, and tasks with progress tracking.</li>
                <li><strong>Events Page:</strong> List of all events with options to add, edit, and delete events.</li>
                <li><strong>Attendees Page:</strong> List of all attendees with options to add, edit, and delete attendees.</li>
                <li><strong>Tasks Page:</strong> List of all tasks with options to add, edit, and delete tasks.</li>
            </ul>
        </div>

 <div class="section">
            <h2>Screenshots and Video</h2>
            <h3>Screenshots</h3>
            <div class="screenshot">
                <img src="screenshots/home-page.png" alt="Home Page">
                <img src="screenshots/events-page.png" alt="Events Page">
            </div>
            <h3>Demo Video</h3>
            <p><a class="btn" href="https://youtu.be/demo-video-link" target="_blank">Watch Demo Video</a></p>
        </div>

 <div class="section">
            <h2>Getting Started</h2>
            <h3>Prerequisites</h3>
            <ul>
                <li>Java 17 or above</li>
                <li>PostgreSQL Database</li>
                <li>Node.js and npm</li>
            </ul>
            <h3>Backend Setup</h3>
            <div class="code-block">
                cd Event Management API<br>
                Configure your PostgreSQL database connection in application.properties.<br>
                mvn spring-boot:run
            </div>
            <h3>Frontend Setup</h3>
            <div class="code-block">
                cd dashboard-frontend<br>
                npm install<br>
                npm start
            </div>
        </div>
    </div>
</body>
</html>
