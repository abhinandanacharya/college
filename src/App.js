import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import UgCourses from "./components/ug_courses";
import Ug from "./components/ug";
import Student from "./components/ug_courses";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="m-60" />
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/ug-courses" exact component={UgCourses} />
            <Route path="/ug" exact component={Ug} />
            <Route path="/student" exact component={Student} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
