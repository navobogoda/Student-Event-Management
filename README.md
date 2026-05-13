# Event Management System

A full-stack MERN application for managing events, event bookings, participants, and event details with user authentication.

## Problem Description

Many organizations, clubs, and universities face difficulties when managing events manually.

Event organizers often use papers, messages, or spreadsheets to manage event details and participant registrations.

Most event organizers do not have a simple system to:

Record event details  
Manage upcoming events  
Register participants  
Search event information  
Track event bookings  

This creates problems in event planning and participant management.

## Proposed Solution

The system allows users to:

Register and login securely  
Add and manage events  
View available events  
Search events  
Register participants for events  
Delete or update event details  

The system provides a simple and user-friendly dashboard to manage events efficiently.

## Features

User Registration & Login  
JWT Authentication  
Add Events  
View Events  
Update Events  
Delete Events  
Search Events  
Participant Registration  
Event Booking Management  
React Frontend Dashboard  
MongoDB Database Integration  

## Technologies Used

### Frontend

React  
Axios  
CSS  

### Backend

Node.js  
Express.js  
MongoDB  
Mongoose  
JWT Authentication  
bcrypt  

### Tools

VS Code  
Postman  
MongoDB Compass  
GitHub  

## Folder Structure

event-management-system
│
├── backend
│   ├── controller
│   ├── model
│   ├── routes
│   ├── index.js
│   └── .env
│
├── event-management-frontend
│   ├── src
│   │   ├── api
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── App.css
│
└── README.md

## Running Ports

### Backend Runs On

http://localhost:5000

### Frontend Runs On

http://localhost:5173

## Process in Postman

### 1. User Registration

POST http://localhost:5000/api/users/register

User Registration

### 2. User Login

POST http://localhost:5000/api/users/login

User Login

### 3. Add Event

POST http://localhost:5000/api/events

Add Event

### 4. Get Events

GET http://localhost:5000/api/events

Get Events

### 5. Search Events

GET http://localhost:5000/api/events/search?keyword=workshop

Search Events

### 6. Update Event

PUT http://localhost:5000/api/events/:id

Update Event

### 7. Delete Event

DELETE http://localhost:5000/api/events/:id

Delete Event

### 8. Register Participant

POST http://localhost:5000/api/events/:id/register

Register Participant
