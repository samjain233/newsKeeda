import React, { Component } from "react";
import PropTypes from "prop-types";
import "./navbar.css";

export class Navbar extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      navitems: [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
      ],
    };
  }

  render() {
    return (
      <div className="w-screen navbar__bg-color flex flex-row justify-between items-center px-1 py-2 shadow-lg">
        <div className="flex flex-row justify-end items-center">
          <ul className="flex flex-row justify-start items-center text-white mx-1">
            <li className="flex px-4 py-2 cursor-pointer navbar-items__hover rounded-md">
              Home
            </li>
            <li className="flex px-4 py-2 cursor-pointer navbar-items__hover rounded-md">
              About Us
            </li>
            <li className="flex px-4 py-2 cursor-pointer navbar-items__hover rounded-md">
              Blog
            </li>
            <li className="flex px-4 py-2 cursor-pointer navbar-items__hover rounded-md">
              Donate
            </li>
            {this.state.navitems.map((element) => {
              return (
                <a href={`/${element}`}>
                <li className="flex px-4 py-2 cursor-pointer navbar-items__hover rounded-md">
                  {element}
                </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
