import { useEffect, useState } from "react";
import API from "./api/api";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    location: ""
  });

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "student"
  });

  const [registrationData, setRegistrationData] = useState({
    userId: "",
    eventId: ""
  });

  useEffect(() => {
    getEvents();
    getUsers();
    getRegistrations();
  }, []);

  const getEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRegistrations = async () => {
    try {
      const res = await API.get("/registrations");
      setRegistrations(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addEvent = async (e) => {
    e.preventDefault();

    try {
      await API.post("/events", eventData);

      setEventData({
        title: "",
        description: "",
        date: "",
        location: ""
      });

      getEvents();
      alert("Event added successfully");
    } catch (error) {
      alert("Error adding event");
      console.log(error);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await API.delete(`/events/${id}`);
      getEvents();
      alert("Event deleted");
    } catch (error) {
      alert("Error deleting event");
      console.log(error);
    }
  };

  const addUser = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users", userData);

      setUserData({
        name: "",
        email: "",
        role: "student"
      });

      getUsers();
      alert("Student added successfully");
    } catch (error) {
      alert("Error adding student");
      console.log(error);
    }
  };

  const registerStudent = async (e) => {
    e.preventDefault();

    try {
      await API.post("/registrations", registrationData);

      setRegistrationData({
        userId: "",
        eventId: ""
      });

      getRegistrations();
      alert("Student registered for event");
    } catch (error) {
      alert("Error registering student");
      console.log(error);
    }
  };

  const deleteRegistration = async (id) => {
    try {
      await API.delete(`/registrations/${id}`);
      getRegistrations();
      alert("Registration cancelled");
    } catch (error) {
      alert("Error cancelling registration");
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Student Event Management System</h1>
      

      <div className="grid">
        <div className="card">
          <h2>Add Event</h2>

          <form onSubmit={addEvent}>
            <input
              type="text"
              placeholder="Event title"
              value={eventData.title}
              onChange={(e) =>
                setEventData({ ...eventData, title: e.target.value })
              }
              required
            />

            <textarea
              placeholder="Event description"
              value={eventData.description}
              onChange={(e) =>
                setEventData({ ...eventData, description: e.target.value })
              }
              required
            ></textarea>

            <input
              type="date"
              value={eventData.date}
              onChange={(e) =>
                setEventData({ ...eventData, date: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="Location"
              value={eventData.location}
              onChange={(e) =>
                setEventData({ ...eventData, location: e.target.value })
              }
              required
            />

            <button type="submit">Add Event</button>
          </form>
        </div>

        <div className="card">
          <h2>Add Student</h2>

          <form onSubmit={addUser}>
            <input
              type="text"
              placeholder="Student name"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              required
            />

            <input
              type="email"
              placeholder="Student email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="Role"
              value={userData.role}
              onChange={(e) =>
                setUserData({ ...userData, role: e.target.value })
              }
            />

            <button type="submit">Add Student</button>
          </form>
        </div>
      </div>

      <div className="card full">
        <h2>Register Student for Event</h2>

        <form onSubmit={registerStudent} className="register-form">
          <select
            value={registrationData.userId}
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                userId: e.target.value
              })
            }
            required
          >
            <option value="">Select Student</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>

          <select
            value={registrationData.eventId}
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                eventId: e.target.value
              })
            }
            required
          >
            <option value="">Select Event</option>
            {events.map((event) => (
              <option key={event._id} value={event._id}>
                {event.title}
              </option>
            ))}
          </select>

          <button type="submit">Register</button>
        </form>
      </div>

      <div className="card full">
        <h2>All Events</h2>

        <div className="list">
          {events.length === 0 ? (
            <p>No events found</p>
          ) : (
            events.map((event) => (
              <div className="item" key={event._id}>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteEvent(event._id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="card full">
        <h2>All Students</h2>

        <div className="list">
          {users.length === 0 ? (
            <p>No students found</p>
          ) : (
            users.map((user) => (
              <div className="item" key={user._id}>
                <div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <p>
                    <strong>Role:</strong> {user.role}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="card full">
        <h2>Registrations</h2>

        <div className="list">
          {registrations.length === 0 ? (
            <p>No registrations found</p>
          ) : (
            registrations.map((reg) => (
              <div className="item" key={reg._id}>
                <div>
                  <p>
                    <strong>User ID:</strong> {reg.userId}
                  </p>
                  <p>
                    <strong>Event ID:</strong> {reg.eventId}
                  </p>
                  <p>
                    <strong>Status:</strong> {reg.status}
                  </p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteRegistration(reg._id)}
                >
                  Cancel
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;