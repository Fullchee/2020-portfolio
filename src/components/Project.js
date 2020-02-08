import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Project extends Component {
  tags = () => {
    const project = this.props.project;
    const tags = project.tags || [];
    const buttons = tags.map(tag => {
      return (
        <button key={`${project.id}-${tag}`} onClick={this.props.tagClick}>
          {tag}
        </button>
      );
    });
    return <div>{buttons}</div>;
  };

  render() {
    const project = this.props.project;
    return (
      <article className="6u 12u work-item">
        <h3>{project.caption}</h3>
        <img
          className="project__image"
          src={project.img}
          alt={project.altText || ""}
        />
        <div className="image__overlay"></div>
        <div className="project-buttons">
          <a className="button" href={project.repo}>
            Repo <span className="icon fa-external-link"></span>
          </a>
          <a className="button" href={project.demo}>
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
  tagClick: PropTypes.func
};
