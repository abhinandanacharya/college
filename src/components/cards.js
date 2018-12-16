import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      content: props.content,
      url: props.url ? props.url : "#"
    };
  }
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{this.state.title}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          <p className="card-text">{this.state.content}</p>
          <Link to={`${this.state.url}`} className="card-link btn btn-primary">
            View more
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
