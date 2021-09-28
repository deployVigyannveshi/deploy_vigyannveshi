import "./navbar.css";
import React, { useState } from "react";
import logo from "./images/main_logo.svg";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img src={logo} alt="VV" />
      </Link>
      {showMenu ? (
        <ul>
          <li>
            <NavLink className="link" exact activeClassName="activePage" to="/">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              exact
              activeClassName="activePage"
              to="/vidya"
            >
              Vidya
            </NavLink>
          </li>
        </ul>
      ) : null}
      <ul className="visibility">
        <li>
          <NavLink className="link" exact activeClassName="activePage" to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            exact
            activeClassName="activePage"
            to="/vidya"
          >
            Vidya
          </NavLink>
        </li>
      </ul>
      <svg
        onClick={() => {
          setshowMenu(!showMenu);
        }}
        className="bar"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
      </svg>
    </nav>
  );
}
