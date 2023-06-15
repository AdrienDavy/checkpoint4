import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import particles from "../assets/img/particles.png";

function Navbar() {
  const location = useLocation();
  const hideNavbarPaths = ["/", "/login", "/new"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  if (shouldHideNavbar) {
    return null;
  }
  return (
    <div className="navbar-container">
      <img src={particles} alt="Particles" className="avatar" />
      <ul className="navbar-list">
        <li>
          <NavLink
            to="/newscript"
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            Poster un synopsis
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            to="/newvideo"
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            Poster une vidéo
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/scripts"
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            Synopsis
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/videos"
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            Vidéos
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
