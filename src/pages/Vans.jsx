import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Van from '../components/van.component';

const Vans = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    console.log(vans);

    return (
        <div className="vans-page">
            <div className="container">
                <h1 className="vans-page-title">Explore our van options</h1>

                <div className="vans-container">
                    {
                        vans && vans.map((van) => {
                            return (
                                    <Van key={van.id} van={van} />
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Vans;