import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.projects.length - 1) {
      return;
    }

    this.gotoNext();
  }

  setupDescription() {}

  renderGallery() {
    const { projects } = this.props;

    if (!projects) {
      return;
    }

    const gallery = projects.map((project, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <a
            className="image fit thumb"
            href="https://www.google.ca"
            onClick={e => this.openLightbox(i, e)}
          >
            <img src={project.thumbnail} alt={project.altText || ""} />
          </a>

          <h3>{project.caption}</h3>
          {/* TODO: <p>{this.setupDescription()} */}
          <p>{project.description}</p>
        </article>
      );
    });

    return <div className="row">{gallery}</div>;
  }
  render() {
    return <div>{this.renderGallery()}</div>;
  }
}

Gallery.displayName = "Gallery";
Gallery.propTypes = {
  projects: PropTypes.array
};
