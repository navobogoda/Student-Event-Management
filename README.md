# Student Event Management System

A full-stack MERN application for managing university events, student registrations, and event participation with RESTful APIs and MongoDB integration.

Based on the requirements of the Web Services and Technology (IT2234) ICA-03 project assignment.

---

# Problem Description

Many universities and educational institutes struggle to manage student events efficiently.

Traditional event management methods such as manual registrations, spreadsheets, or paper-based systems can create several problems:

- Difficulty managing event details
- Duplicate or incorrect registrations
- Lack of centralized event records
- Poor organization of student participation
- Difficulty tracking registered students

This creates management and communication problems for both students and organizers.

---

# Proposed Solution

The Student Event Management System provides a centralized web-based solution to manage events and student registrations.

The system allows administrators or organizers to:

- Create and manage events
- Store event information in MongoDB
- Register students for events
- Update event details
- Delete events and registrations
- View all users and registrations through REST APIs

The system uses Node.js, Express.js, and MongoDB to provide a scalable backend API system.

---

# Features

- Event Management
- User Management
- Event Registration System
- RESTful API Architecture
- CRUD Operations
- MongoDB Database Integration
- API Testing with Postman
- Environment Variable Configuration using `.env`
- Error Handling
- JSON Data Handling
- Mongoose Models
- Express Routing
- Organized Backend Structure

---

# Technologies Used

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## API Testing

- Postman

## Version Control

- GitHub
- Git

## Optional Frontend

- React.js

---

# Project Structure

```bash
Student-Event-Management/
│
├── controllers/
├── models/
├── routes/
├── config/
├── server.js
├── package.json
├── .env
└── README.md
```

---

# API Endpoints

## Event APIs

### Create Event

```http
POST /api/events
```

Example JSON:

```json
{
  "title": "Web Development Workshop",
  "description": "MERN Stack Workshop",
  "date": "2026-05-20",
  "location": "Lab 01"
}
```
<img width="1920" height="1080" alt="Screenshot (114)" src="https://github.com/user-attachments/assets/3989c668-93fa-448b-846f-b87793d7069f" />

---

### Get All Events

```http
GET /api/events


```
<img width="1920" height="1080" alt="Screenshot (115)" src="https://github.com/user-attachments/assets/b9fa3483-2ffe-474a-aed2-0388d908ae22" />
![Uploading Screenshot (115).png…]()

---

### Update Event

```http
PUT /api/events/:id
```

Example:

```json
{
  "title": "Updated Workshop"
}
```

<img width="1920" height="1080" alt="Screenshot (116)" src="https://github.com/user-attachments/assets/cfa7d95a-f12b-4343-98ef-db8a3250e96f" />


---

### Delete Event

```http
DELETE /api/events/:id
```

<img width="1920" height="1080" alt="Screenshot (117)" src="https://github.com/user-attachments/assets/74cbcbc0-f0c2-4c0e-ae25-cccd80560bfb" />


---


# User APIs

### Create User

```http
POST /api/users
```

Example JSON:

```json
{
  "name": "Buddhike",
  "email": "buddhike@gmail.com",
  "role": "student"
}
```
<img width="1920" height="1080" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/ace28c8a-0486-4332-bf07-38845f7befd3" />


---

### Get All Users

```http
GET /api/users
```
<img width="1920" height="1080" alt="Screenshot (119)" src="https://github.com/user-attachments/assets/575f8320-00ac-4eac-bc51-e5c41f744bce" />

---

### Update User

```http
PUT /api/users/:id
```
<img width="1920" height="1080" alt="Screenshot (120)" src="https://github.com/user-attachments/assets/bf8ff92c-94fa-4c59-90eb-10138d3aeb28" />


---

### Delete User

```http
DELETE /api/users/:id
```
<img width="1920" height="1080" alt="Screenshot (121)" src="https://github.com/user-attachments/assets/63d6bffe-727a-4c7b-9b6a-729000f2c70d" />


---

# Registration APIs

### Register for Event

```http
POST /api/registrations
```

Example JSON:

```json
{
  "userId": "USER_ID",
  "eventId": "EVENT_ID"
}
```
<img width="1920" height="1080" alt="Screenshot (122)" src="https://github.com/user-attachments/assets/783cb986-edf4-4861-8f95-92d2eebc1554" />


---

### Get All Registrations

```http
GET /api/registrations
```
<img width="1920" height="1080" alt="Screenshot (123)" src="https://github.com/user-attachments/assets/7a57f179-d850-42b4-a8c5-a7e30e4ce8b7" />


---

### Cancel Registration

```http
DELETE /api/registrations/:id
```
<img width="1920" height="1080" alt="Screenshot (124)" src="https://github.com/user-attachments/assets/f9991086-7a67-41c1-8921-9d8701c07ce2" />

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/your-username/student-event-management.git
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Install dotenv

```bash
npm install dotenv
```

---

## 4. Configure Environment Variables

Create a `.env` file in the root folder:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/eventapi
PORT=5000
JWT_SECRET=studenteventsecret
```

---

## 5. Start MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas.

---

# How to Run the Project

## Start Backend Server

```bash
npm start
```

or

```bash
node server.js
```

Server runs on:

```txt
http://localhost:5000
```

---

# API Testing with Postman

Postman was used to test all REST API endpoints.

Tested Operations:

- POST Requests
- GET Requests
- PUT Requests
- DELETE Requests

---

# CRUD Operations Implemented

| Operation | Method | Description |
| ---------- | ------ | ----------- |
| Create | POST | Add new records |
| Read | GET | Retrieve records |
| Update | PUT | Update existing records |
| Delete | DELETE | Remove records |

---

# Learning Outcomes

This project helped to understand:

- RESTful API development
- Backend architecture
- MongoDB integration
- CRUD functionality
- API testing using Postman
- GitHub version control
- Express.js routing and controllers
- Environment variable management using `.env`

---

# Author

- B.A.N.S.Bogoda
- 2022/ICT/51
- Web Services and Technology (IT2234(P))
- ICA-03 Project
