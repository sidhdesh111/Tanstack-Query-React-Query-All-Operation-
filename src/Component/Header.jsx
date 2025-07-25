import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_section">
      <header className="header  container">
        <div className="logo_container">
          <h5>Sidhdesh Srivastava</h5>
        </div>
        <nav className="nav_area">
          <ul className="nav_menu">
            <li>
              <NavLink to={"/"} className="nav_link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Infinite"} className="nav_link">
                Infinite Scroll
              </NavLink>
            </li>
            <li>
              <NavLink to={"/pagination_2"} className="nav_link">
                Pagination
              </NavLink>
            </li>
            <li>
              <NavLink to={"/fetchrq"} end className="nav_link">
                Curd Operation
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
