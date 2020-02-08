import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Project extends Component {
  render() {
    const project = this.props.project;
    return (
      <article className="6u 12u$(xsmall) work-item">
        <a
          className="image fit"
          href="https://www.google.ca"
          onClick={() => {}}
        >
          <img src={project.img} alt={project.altText || ""} />
        </a>
        <h3>{project.caption}</h3>
        <div className="project-buttons">
          <button className="button">Repo</button>
          <button className="button">Demo</button>
        </div>
        <p>{project.description}</p>
      </article>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object
};
