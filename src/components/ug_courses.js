import React, { Component } from "react";
import Card from "./cards";

class UgCourses extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <Card title="BCA" content="BCA Department" />
          </div>
          <div className="col-md-4">
            <Card title="B.Com" content="B.Com Department" />
          </div>
          <div className="col-md-4">
            <Card title="BFA" content="BFA Department" />
          </div>
        </div>
        <div className="m-60" />
        <div className="row">
          <div className="col-md-4">
            <Card title="BA" content="BA Department" />
          </div>
        </div>
      </div>
    );
  }
}

export default UgCourses;
