import React from 'react';
import './App.css';

import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Component from "./components/Component";
import About from "./components/About";
import Login from "./components/Login";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/about" component = {About} />
          <Route path="/component" component = {Component} />   
          <Route path="/login" component = {Login} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )

}

export default App;
