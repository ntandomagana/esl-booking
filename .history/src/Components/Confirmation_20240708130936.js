import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Confirmation = () => {
    const location = useLocation();
    const { bookingDetails } = location.state || {};

    if (!booking)
}