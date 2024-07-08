import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BookingForm = () => {
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const history= useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingDetails = { name, email, date, time };
        history.push('/confirmation', { bookingDetails });
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
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
            </form>
        </div>
    )
}