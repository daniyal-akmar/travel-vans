import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VansTab = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/host/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    return (
        <div className="vans-tab">
            <h2>Your listed vans</h2>
            {
                vans ? vans.map((van) => {
                    return (
                        <Link key={van.id} to={`/host/vans/${van.id}`} className="vans-tab-link">
                            <div className="vans-tab-card">
                                <img src={van.imageUrl} alt={van.name} />
                                <div>
                                    <h3>{van.name}</h3>
                                    <p>${van.price}/day</p>
                                </div>
                            </div>
                        </Link>
                    )
                }) : (<h2>Loading...</h2>)
            }
        </div>
    )
}

export default VansTab;