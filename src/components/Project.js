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
    return <div className="project__tags">{buttons}</div>;
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
        <div className="project__buttons">
          {project.repo ? (
            <a
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              href={project.repo}
            >
              Repo <span className="icon fa-github"></span>
            </a>
          ) : null}
          {project.demo ? (
            <a
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              href={project.demo}
            >
              Demo <span className="icon fa-external-link"></span>
            </a>
          ) : null}
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
