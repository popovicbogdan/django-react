import React, { Component } from "react";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Post from "./Post";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <Link to="/" className="navbar-brand">
              Be the best you can be
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="navbar-collapse collapse show" id="navbarColor01">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/:id(\d+)" component={Post} />
        </div>
      </Router>
    );
  }
}

export default Header;
