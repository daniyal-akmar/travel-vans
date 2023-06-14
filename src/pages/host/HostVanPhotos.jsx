import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanPhotos = () => {
    const [van] = useOutletContext();

    return (
        <div>
            { 
                van ?
                <img style={{ width: "30%", height: "auto", borderRadius: "3px" }} src={van.imageUrl} alt={van.name} />
                :
                (<p>Loading...</p>)
            }
        </div>
    )
}

export default HostVanPhotos;