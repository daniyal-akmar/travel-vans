import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
    return (
        <div className="host">
            <div className="container">
                <nav className="host-nav">
                    <NavLink 
                        to="."
                        end
                        className={({isActive}) => isActive ? "active-link" : null}>Dashboard
                    </NavLink>
                    
                    <NavLink 
                        to="income" 
                        className={({isActive}) => isActive ? "active-link" : null}>Income
                    </NavLink>

                    <NavLink 
                        to="vans" 
                        className={({isActive}) => isActive ? "active-link" : null}>Vans
                    </NavLink>
                    
                    <NavLink 
                        to="reviews" 
                        className={({isActive}) => isActive ? "active-link" : null}>Reviews
                    </NavLink>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}

export default HostLayout;