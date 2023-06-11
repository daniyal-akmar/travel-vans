import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
        <div className="container">
            <h1 className="home-title">You got the travel plans, we got the travel vans.</h1>
            <p className="home-subtitle">
                Add adventure to your life by joining the #vanlife movement. 
                Rent the perfect van to make your perfect road trip.
            </p>
            <button className="btn btn-primary">
                <Link to="/vans">
                    Find your van
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Home;