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

    return
}