import React, {useState, useEffect} from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

const HostVanPricing = () => {
    const [van] = useOutletContext();

    const priceStyles = {
        fontSize: "1.25rem",
        fontWeight: "700",
        color: "#000"
    }

    return (
        <div>
            {
                van ? 
                    <p style={priceStyles}>${van.price}<span style={{fontSize: "1rem", fontWeight: "500", color: "#4D4D4D"}}>/day</span></p>
                    :
                    <p>Loading...</p>
            }
        </div>
    )
}

export default HostVanPricing;