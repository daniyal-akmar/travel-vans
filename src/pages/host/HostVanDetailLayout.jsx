import React, { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";

const HostVanDetailLayout = () => {
    const [van, setVan] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]));
    }, []);

    return (
        <> 
            <div className="back-link-container">   
                <span>&#8592;</span>
                <NavLink className="back-link" to="..">Back to all vans</NavLink>
            </div>

            <div className="host-van-detail">
                {
                    van ? (
                        <section className="host-van-detail-container">
                            <img src={van.imageUrl} name={van.name} />
                            <div>
                                <button className={`btn btn-${van.type}`}>{van.type}</button>
                                <h2>{van.name}</h2>
                                <p>${van.price}<span>/day</span></p>
                            </div>
                        </section>
                    ) : 
                    (
                        <h2>Loading...</h2>
                    )
                }

                <div className="host-van-detail-tabs">
                    <NavLink 
                        to={`/host/vans/${id}`}
                        end
                        className={({isActive}) => isActive ? "tab" : null}
                    >
                        Details
                    </NavLink>
                    
                    <NavLink 
                        to={`/host/vans/${id}/pricing`}
                        className={({isActive}) => isActive ? "tab" : null}
                    >
                        Pricing
                    </NavLink>
                    
                    <NavLink 
                        to={`/host/vans/${id}/photos`}
                        className={({isActive}) => isActive ? "tab" : null}
                    >
                        Photos
                    </NavLink>
                </div>
                <Outlet context={[van]} />
            </div>
        </>
    )
}

export default HostVanDetailLayout;