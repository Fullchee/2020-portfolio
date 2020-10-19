import PropTypes from "prop-types";
import React, { Component } from "react";
import Ripples from "react-touch-ripple";

export default class Project extends Component {
  tags = () => {
    const project = this.props.project;
    const tags = project.tags || [];
    const buttons = tags.map((tag) => {
      return (
        <Ripples key={`${project.id}-${tag}`}>
          <button
            className="tag"
            onClick={this.props.tagClick}
            data-selected={this.props.selected === tag}
            data-value={tag}
          >
            {tag}
          </button>
        </Ripples>
      );
    });
    return <div className="project__tags">{buttons}</div>;
  };

  renderVideoOrImage = (project) => {
    if (project.video && project.img) {
      return (
        <video muted
          className="project__video"
          key={`${project.id}-video`}
          // onMouseOver={(e) => e.target.play()}
          // onFocus={(e) => e.target.play()}
          // onMouseOut={(e) => e.target.pause()}
          // onBlur={(e) => e.target.pause()}
          onDoubleClick={this.props.onDoubleClick}
          src={project.video || null}
        >
          <img
            className="project__image"
            src={project.img}
            alt={project.alt || ""}
          />
        </video>
      );
    }

    if (project.img) {
      return (
        <img
          className="project__image"
          src={project.img}
          alt={project.alt || ""}
        />
      );
    }
    return null;
  };

  render() {
    const project = this.props.project;
    return (
      <article className="project">
        <h3>{project.caption}</h3>
        {this.renderVideoOrImage(project)}
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
        <div className="project__description" dangerouslySetInnerHTML={({ "__html": project.description })}></div>
        {this.tags()}
      </article>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object,
  tagClick: PropTypes.func,
};
