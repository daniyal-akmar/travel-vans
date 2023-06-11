import React from "react";
import { Link } from "react-router-dom";

const Van = ({ van }) => {
    return (
        <div className="van-card">
            <Link to={`/vans/${van.id}`}>
                <img className="van-img" src={van.imageUrl} alt={van.name} />
                <div className="van-card-desc">
                    <h2 className="van-card-title">{van.name}</h2>
                    <p className="van-card-price"><strong>${van.price}</strong><span>/day</span></p>
                </div>
                <button className={`btn btn-${van.type}`}>{van.type}</button>
            </Link>
        </div>
    )
}

export default Van;