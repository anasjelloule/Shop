import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center ">
              Todos
            </Link>
            <a
              href="#"
              data-target="mobile-demo"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
          <div className="nav-content red"></div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <div className="user-view">
              <div className="background">
                <img
                  src="https://materializecss.com/images/office.jpg"
                  className="img-fluid"
                />
              </div>
              <a href="#user">
                <img className="circle" src="images/yuna.jpg" />
              </a>
              <a href="#name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    );
  }
}

// $(document).ready(function(){
//   $('.sidenav').sidenav();

// });
