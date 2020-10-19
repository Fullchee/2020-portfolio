import PropTypes from "prop-types";
import React, { Component } from "react";
import Project from "./Project";
import Tags from "./Tags";
import ModalVideo from 'react-modal-video'

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      isOpen: false,
    };
  }
  tagClick = e => {
    const tag = e.target.dataset.value;
    const newFilter = this.state.filter === tag ? "" : tag;
    this.setState({
      filter: newFilter
    });
  };

  openModal(project) {
    return () => {
      this.setState({ isOpen: true, selectedProject: project });
    }
  }

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
            selected={this.state.filter}
            onDoubleClick={this.openModal(project)}
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
        <ModalVideo channel='custom' isOpen={this.state.isOpen} url={this.state.selectedProject && this.state.selectedProject.video} onClose={() => this.setState({ isOpen: false })} />
      </>
    );
  }
}

Gallery.displayName = "Gallery";
Gallery.propTypes = {
  projects: PropTypes.array
};
