import React from 'react';
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar border-bottom border-body navbar-expand-lg" style={{ backgroundColor: "black" }}>
        <div className="container-fluid">
          <a className="navbar-brand  logo" href="/">DevFolio</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" href="/">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" href="/">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
