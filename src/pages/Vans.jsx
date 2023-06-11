import React, { useEffect } from 'react'

const Vans = () => {
    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return (
    <div className="vans">
        <div className="container">
            <h1>Vans page goes here</h1>
        </div>
    </div>
    )
}

export default Vans;