import React from "react";
import { Link } from "react-router-dom";
import aboutPageImg from "../images/about.png";

const About = () => {
  return (
    <div className="about">
        <img className="about-page-img" src={aboutPageImg} alt="about me" />
        <div className="container container-about">
            <h1 className="about-title">
                Don't squeeze in a sedan when
                you could relax in a van.
            </h1>
            <p>
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
            </p>
            <p>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>

            <div className="about-card">
                <h2 className="about-card-title">
                    Your destination is waiting.
                    Your van is ready.
                </h2>

                <button className="btn btn-secondary">
                    <Link to="/vans">Explore our vans</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default About;