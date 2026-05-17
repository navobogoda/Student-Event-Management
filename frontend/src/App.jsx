import { useEffect, useMemo, useState } from "react";
import API from "./api/api";
import uovLogo from "./assets/uov-logo.jfif";
import djPhoto from "./assets/dj.jfif";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [page, setPage] = useState("home");
  const [showEvents, setShowEvents] = useState(false);

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
      setEventData({ title: "", description: "", date: "", location: "" });
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
      setUserData({ name: "", email: "", role: "student" });
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
      setRegistrationData({ userId: "", eventId: "" });
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

  const userNameById = (id) => {
    const user = users.find((item) => item._id === id);
    return user ? user.name : id;
  };

  const eventTitleById = (id) => {
    const event = events.find((item) => item._id === id);
    return event ? event.title : id;
  };

  const upcomingEvents = useMemo(() => events.slice(0, 3), [events]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">
          <img src={uovLogo} alt="University of Vavuniya Logo" className="uov-logo" />
          <div>
            <h3>UniEvents</h3>
            <span>University of Vavuniya Event Management</span>
          </div>
        </div>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
        </div>
      </nav>

      {page === "home" ? (
        <main className="home-page">
          <section className="hero-section">
            <div className="hero-content">
              <p className="badge">University Event Platform</p>
              <h1>Welcome to UniEvents</h1>
              <p className="hero-text">
                Manage University of Vavuniya events, students, and registrations
                in one clean and modern dashboard.
              </p>

              <div className="hero-actions">
                <button className="primary-btn" onClick={() => setPage("dashboard")}>
                  Open Dashboard
                </button>
                <button
                  className="secondary-btn"
                  onClick={() => setShowEvents(!showEvents)}
                >
                  {showEvents ? "Hide Upcoming Events" : "View Upcoming Events"}
                </button>
              </div>
            </div>

            <div className="hero-card clean-hero-card">
              <div className="animation-shell">
                <img
                  src={djPhoto}
                  className="event-photo"
                  alt="Outdoor university event celebration"
                />
              </div>

              <div className="quick-stats-row">
                <div className="quick-stat">
                  <strong>{events.length}</strong>
                  <span>Events</span>
                </div>
                <div className="quick-stat">
                  <strong>{users.length}</strong>
                  <span>Students</span>
                </div>
                <div className="quick-stat">
                  <strong>{registrations.length}</strong>
                  <span>Registrations</span>
                </div>
              </div>
            </div>
          </section>

          {showEvents && (
            <section className="upcoming-section">
              <div className="section-title">
                <p className="badge">Event List</p>
                <h2>Upcoming Events</h2>
                <p>These are the latest events added to the system.</p>
              </div>

              {upcomingEvents.length === 0 ? (
                <div className="empty-card">No events added yet.</div>
              ) : (
                <div className="upcoming-grid">
                  {upcomingEvents.map((event) => (
                    <div className="upcoming-card" key={event._id}>
                      <div className="upcoming-icon">📅</div>
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      <div className="event-meta">
                        <span>📍 {event.location}</span>
                        <span>
                          🗓️ {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          <section className="features-section">
            <div className="feature-card">
              <span>📝</span>
              <h3>Create Events</h3>
              <p>Add title, date, location, and description for each event.</p>
            </div>
            <div className="feature-card">
              <span>👩‍🎓</span>
              <h3>Manage Students</h3>
              <p>Store student details and keep everything organized.</p>
            </div>
            <div className="feature-card">
              <span>🚀</span>
              <h3>Easy Registration</h3>
              <p>Register students for events using simple dropdowns.</p>
            </div>
          </section>
        </main>
      ) : (
        <main className="dashboard-page">
          <section className="dashboard-hero">
            <div>
              <p className="badge">Admin Dashboard</p>
              <h1>Student Event Management System</h1>
              <p>Control events, students, and registrations from one place.</p>
            </div>
          </section>

          <section className="stats-grid">
            <div className="stat-card">
              <span>📅</span>
              <div>
                <h2>{events.length}</h2>
                <p>Total Events</p>
              </div>
            </div>
            <div className="stat-card">
              <span>🎓</span>
              <div>
                <h2>{users.length}</h2>
                <p>Total Students</p>
              </div>
            </div>
            <div className="stat-card">
              <span>✅</span>
              <div>
                <h2>{registrations.length}</h2>
                <p>Registrations</p>
              </div>
            </div>
          </section>

          <section className="form-grid">
            <div className="glass-card">
              <h2>Add Event</h2>
              <form onSubmit={addEvent}>
                <input
                  type="text"
                  placeholder="Event title"
                  value={eventData.title}
                  onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
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
                  onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
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
                <button className="primary-btn" type="submit">Add Event</button>
              </form>
            </div>

            <div className="glass-card">
              <h2>Add Student</h2>
              <form onSubmit={addUser}>
                <input
                  type="text"
                  placeholder="Student name"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Student email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={userData.role}
                  onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                />
                <button className="primary-btn" type="submit">Add Student</button>
              </form>
            </div>
          </section>

          <section className="glass-card wide-card">
            <h2>Register Student for Event</h2>
            <form onSubmit={registerStudent} className="register-form">
              <select
                value={registrationData.userId}
                onChange={(e) =>
                  setRegistrationData({ ...registrationData, userId: e.target.value })
                }
                required
              >
                <option value="">Select Student</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id}>{user.name}</option>
                ))}
              </select>

              <select
                value={registrationData.eventId}
                onChange={(e) =>
                  setRegistrationData({ ...registrationData, eventId: e.target.value })
                }
                required
              >
                <option value="">Select Event</option>
                {events.map((event) => (
                  <option key={event._id} value={event._id}>{event.title}</option>
                ))}
              </select>

              <button className="primary-btn" type="submit">Register</button>
            </form>
          </section>

          <section className="content-grid">
            <div className="glass-card">
              <h2>All Events</h2>
              <div className="list">
                {events.length === 0 ? <p className="muted">No events found</p> : events.map((event) => (
                  <div className="item" key={event._id}>
                    <div>
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                      <p><strong>Location:</strong> {event.location}</p>
                    </div>
                    <button className="delete-btn" onClick={() => deleteEvent(event._id)}>Delete</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <h2>All Students</h2>
              <div className="list">
                {users.length === 0 ? <p className="muted">No students found</p> : users.map((user) => (
                  <div className="item simple-item" key={user._id}>
                    <div className="avatar">{user.name?.charAt(0)?.toUpperCase()}</div>
                    <div>
                      <h3>{user.name}</h3>
                      <p>{user.email}</p>
                      <p><strong>Role:</strong> {user.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="glass-card wide-card">
            <h2>Registrations</h2>
            <div className="list">
              {registrations.length === 0 ? <p className="muted">No registrations found</p> : registrations.map((reg) => (
                <div className="item" key={reg._id}>
                  <div>
                    <h3>{eventTitleById(reg.eventId)}</h3>
                    <p><strong>Student:</strong> {userNameById(reg.userId)}</p>
                    <p><strong>Status:</strong> {reg.status}</p>
                  </div>
                  <button className="delete-btn" onClick={() => deleteRegistration(reg._id)}>Cancel</button>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
