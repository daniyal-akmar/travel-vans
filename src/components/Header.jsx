import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
        <div className="container container-flex">
            <div className="logo">
                <NavLink to="/">#vanlife</NavLink>
            </div>
            
            <nav className="site-nav">
                <NavLink to="/host" className={({isActive}) => isActive ? "active-link" : null}>Host</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : null}>About</NavLink>
                <NavLink to="/vans" className={({isActive}) => isActive ? "active-link" : null}>Vans</NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Header;