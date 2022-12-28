import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar.jsx';
import NewsHeadline from './components/newsitem/NewsHeadline';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NewsHeadline />
      </div>
    )
  }
}

