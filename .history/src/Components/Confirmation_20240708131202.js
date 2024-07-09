import React from 'react';
import { useLocation, Link } from 'react-router-dom';

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
            <p>We h ave sent you a confirmation email to {bookingDetails.email}.</p>
        </div>
    )
}