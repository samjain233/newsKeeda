import "./App.css";
import React, { Component } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import NewsHeadline from "./components/newsitem/NewsHeadline";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NewsHeadline pageSize={5} />
      </div>
    );
  }
}
