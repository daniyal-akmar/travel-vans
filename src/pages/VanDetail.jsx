import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetail = () => {
    const { id } = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans));
    }, [id]);

    return (
    <div className="van-detail-page">
        <div className="container">
            { van ? (
                <div>
                    <img src={van.imageUrl} alt={van.name} />
                    <button className={`btn btn-${van.type}`}>{van.type}</button>
                    <h2 className="van-detail-title">{van.name}</h2>
                    <p className="van-price">
                        <span>${van.price}</span>/day
                    </p>
                    <p>{van.description}</p>
                    <button className="btn btn-primary">Rent this van</button>
                </div>
                ) : (<h2 style={{ textAlign: "center" }}>Loading...</h2>) }
        </div>
    </div>
    )
}

export default VanDetail;