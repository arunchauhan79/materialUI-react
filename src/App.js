import React, { Component } from "react";
import "./App.css";
import { Header, Footer } from "./components/layout";
import Exercise from "./components/exercises/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Exercise />
        <Footer />
      </div>
    );
  }
}

export default App;
