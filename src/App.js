import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Fresh from "./components/Fresh";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Github from "./components/Github";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/fresh">
            <Fresh />
          </Route>
          <Route path="/experiences">
            <Experiences />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/github">
            <Github />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
