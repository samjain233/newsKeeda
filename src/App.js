import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import NewsHeadline from "./components/newsitem/NewsHeadline";

export default class App extends Component {
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
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<NewsHeadline pageSize={5} category="general" />}
            ></Route>
            {this.state.navitems.map((element) => {
              return (
                <Route
                  key={element}
                  exact
                  path={`/${element}`}
                  element={<NewsHeadline pageSize={5} category={element} />}
                ></Route>
              );
            })}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
