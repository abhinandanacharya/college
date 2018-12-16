import React, { Component } from "react";
import Card from "./cards";
class Student extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <Card title="Under Graduation Courses" url="/ug-courses" />
        </div>
        <div className="col-md-4">
          <Card title="Post Graduation Courses" />
        </div>
      </div>
    );
  }
}

export default Student;
