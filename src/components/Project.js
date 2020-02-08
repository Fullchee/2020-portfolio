import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <article
        className="6u 12u$(xsmall) work-item"
        key={this.props.project.id}
      >
        <a
          className="image fit"
          href="https://www.google.ca"
          onClick={() => {}}
        >
          <img
            src={this.props.project.img}
            alt={this.props.project.altText || ""}
          />
        </a>

        <h3>{this.props.project.caption}</h3>
        {/* TODO: <p>{this.setupDescription()} */}
        <p>{this.props.project.description}</p>
      </article>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object
};
