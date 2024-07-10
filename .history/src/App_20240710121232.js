import React, { useState } from 'react';
import './App.css';

const Home = ({ onBook }) => (
  <div className="Home">
    <h1>Welcome to ESL Booking</h1>
    <p>Book a lesson with our experienced ESL teacher.</p>
    <button onClick={onBook}>Book a Lesson</button>
  </div>
);

const BookingForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = { name, email, date, time };
    onSubmit(bookingDetails);
  };

  return (
    <div className="BookingForm">
      <h1>Book a Lesson</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br />
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const Confirmation = ({ bookingDetails, onHome }) => (
  <div className="Confirmation">
    <h1>Booking Confirmation</h1>
    <p>Thank you for booking a lesson, {bookingDetails.name}!</p>
    <p>We have sent a confirmation email to {bookingDetails.email}.</p>
    <p>Your lesson is scheduled for {bookingDetails.date} at {bookingDetails.time}.</p>
    <button onClick={onHome}>Back to Home</button>
  </div>
);

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBook = () => setCurrentView('booking');
  const handleSubmit = (details) => {
    setBookingDetails(details);
    setCurrentView('confirmation');
  };
  const handleHome = () => setCurrentView('home');

  return (
    <div className="App">
      {currentView === 'home' && <Home onBook={handleBook} />}
      {currentView === 'booking' && <BookingForm onSubmit={handleSubmit} />}
      {currentView === 'confirmation' && (
        <Confirmation bookingDetails={bookingDetails} onHome={handleHome} />
      )}
    </div>
  );
};

export default App;
