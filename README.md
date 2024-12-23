<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Management Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

  .container {
            max-width: 1200px;
            margin: auto;
            overflow: hidden;
            padding: 20px;
        }

 h1, h2, h3 {
            color: #333;
        }

 h1 {
            text-align: center;
            margin-bottom: 20px;
        }

 p {
            margin: 10px 0;
        }

ul {
            margin: 10px 0;
            padding: 0 20px;
        }

 .section {
            background: #fff;
            margin: 20px 0;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

.section h2 {
     border-bottom: 2px solid #333;
            padding-bottom: 10px;
        }

 .btn {
            display: inline-block;
            padding: 10px 20px;
            background: #007BFF;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
        }

 .btn:hover {
            background: #0056b3;
        }

.screenshot img {
            max-width: 100%;
            height: auto;
            border: 2px solid #ddd;
            border-radius: 5px;
            margin: 10px 0;
        }

.code-block {
            background: #f9f9f9;
            border-left: 5px solid #333;
            padding: 10px;
            font-family: monospace;
            white-space: pre-wrap;
            overflow-x: auto;
        }
    </style>
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
