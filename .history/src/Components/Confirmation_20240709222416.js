// src/Confirmation.js
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};

  if (!bookingDetails) {
    return <div>No booking details found.</div>;
  }

  return (
    <div className="Confirmation">
      <h1>Booking Confirmation</h1>
      <p>Thank you for booking a lesson, {bookingDetails.name}!</p>
      <p>We have sent a confirmation email to {bookingDetails.email}.</p>
      <p>
        Your lesson is scheduled for {bookingDetails.date} at{" "}
        {bookingDetails.time}.
      </p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Confirmation;
