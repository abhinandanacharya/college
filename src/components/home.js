import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./cards";

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <Card
            title="Student"
            content="Panel for student Management"
            url="/ug"
          />
        </div>
        <div className="col-md-4">
          <Card title="Teacher" content="Panel for teacher Management" />
        </div>
        <div className="col-md-4">
          <Card title="Administration" content="Panel for Admins" />
        </div>
      </div>
    );
  }
}

export default Home;
