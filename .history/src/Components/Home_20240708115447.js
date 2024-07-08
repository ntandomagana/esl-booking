import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <h1>Berry Teaches</h1>

            <p>Book a lesson with an experienced teacher.</p>
            <Link to="/book">
            <button></button>
            </Link>
        </div>
    )
}