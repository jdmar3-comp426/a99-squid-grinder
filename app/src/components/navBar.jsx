import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink to="/">
          <button class="button is-white">Home</button>
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
