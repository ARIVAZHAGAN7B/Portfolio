import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [hr, setHr] = useState("home"); // Default active state

  return (
    <nav className="navbar">
      <h1 className="nav-name1">
        Por<span className="nav-name2">tFolio</span>
      </h1>
      <ul className="nav-list">
        <li>
          <Link to="/" onClick={() => setHr("home")}>Home</Link>
          {hr === "home" && <hr />}
        </li>
        <li>
          <Link to="/projects" onClick={() => setHr("projects")}>Projects</Link>
          {hr === "projects" && <hr />}
        </li>
        <li>
          <Link to="/socials" onClick={() => setHr("socials")}>Socials</Link>
          {hr === "socials" && <hr />}
        </li>
        <li>
          <Link to="/contact" onClick={() => setHr("contact")}>Contact</Link>
          {hr === "contact" && <hr />}
        </li>
        <li>
          <Link to="/codex" onClick={() => setHr("codex")}>Build Your StartUp</Link>
          {hr === "codex" && <hr />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
