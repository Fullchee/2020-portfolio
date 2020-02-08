import PropTypes from "prop-types";
import React, { Component } from "react";
import Project from "./Project";
import Tags from "./Tags";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }
  tagClick = e => {
    debugger;
    const tag = e.target.dataset.value;
    const newFilter = this.state === tag ? "" : tag;
    this.setState({
      filter: newFilter
    });
  };
  renderGallery = () => {
    const { projects } = this.props;

    if (!projects) {
      return;
    }

    const filter = this.state.filter;
    const gallery = projects
      .filter(project => {
        if (!this.state.filter) {
          return true;
        }
        return project.tags.includes(filter);
      })
      .map(project => {
        return (
          <Project
            project={project}
            tagClick={this.tagClick}
            key={project.id}
          />
        );
      });

    return <div className="projects">{gallery}</div>;
  };
  render() {
    return (
      <>
        <Tags filter={this.state.filter} tagClick={this.tagClick} />
        <div>{this.renderGallery()}</div>
      </>
    );
  }
}

Gallery.displayName = "Gallery";
Gallery.propTypes = {
  projects: PropTypes.array
};
