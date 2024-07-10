import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to ESL Booking</h1>
      <p>Book a lesson with our experienced ESL teacher.</p>
      <Link to="/book">
        <button>Book a Lesson</button>
      </Link>
    </div>
  );
};

export default Home;
