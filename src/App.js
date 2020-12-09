import React from 'react';
import './App.css';

import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Component from "./components/Component";
import About from "./components/About";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import { useForm } from 'react-hook-form';
import Details from './components/Details';
import Conference1 from './components/Conference1';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/about" component = {About} />
          <Route path="/component" component = {Component} />   
          <Route path="/Signin" component = {Signin} />
          <Route path="/signup" component = {Signup} />
          <Route path="/details" component = {Details} />
          <Route path="/conference1" component = {Conference1} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )

}

export default App;
