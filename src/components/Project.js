import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Project extends Component {
  tags = () => {
    const project = this.props.project;
    const tags = project.tags || [];
    const buttons = tags.map((tag) => {
      return (
        <button
          className="tag"
          key={`${project.id}-${tag}`}
          onClick={this.props.tagClick}
          data-selected={this.props.selected === tag}
          data-value={tag}
        >
          {tag}
        </button>
      );
    });
    return <div style={{ marginTop: "10px" }}>{buttons}</div>;
  };

  getMedia = () => {
    const project = this.props.project;
    if (project.video) {
      return <video muted src={project.video} loop></video>;
    }
    return (
      <img
        className="project__image"
        src={project.img}
        alt={project.altText || ""}
      />
    );
  };

  render() {
    const project = this.props.project;
    return (
      <article className="project">
        <h3>{project.caption}</h3>
        {project.img ? (
          <img
            className="project__image"
            src={project.img}
            alt={project.altText || ""}
          />
        ) : null}
        <div className="image__overlay"></div>
        <div className="project-buttons">
          <a
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            href={project.repo}
          >
            Repo <span className="icon fa-github"></span>
          </a>
          <a
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            href={project.demo}
          >
            Demo <span className="icon fa-external-link"></span>
          </a>
        </div>
        <p>{project.description}</p>
        {this.tags()}
      </article>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object,
  tagClick: PropTypes.func,
};
