import PropTypes from "prop-types";
import React, { Component } from "react";
import Project from "./Project";

export default class Gallery extends Component {
  renderGallery = () => {
    const { projects } = this.props;

    if (!projects) {
      return;
    }

    const gallery = projects.map((project, i) => {
      return <Project project={project} key={project.id} />;
    });

    return <div className="row">{gallery}</div>;
  };
  render() {
    return <div>{this.renderGallery()}</div>;
  }
}

Gallery.displayName = "Gallery";
Gallery.propTypes = {
  projects: PropTypes.array
};
