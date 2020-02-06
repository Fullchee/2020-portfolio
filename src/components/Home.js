import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Layout from "./layout";
import Gallery from "./Gallery";

import { CURRENT_PROJECTS, PAST_PROJECTS } from "../assets/projects";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
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
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) {
      return;
    }

    this.gotoNext();
  }

  render() {
    const siteTitle = "Fullchee's Portfolio";
    const siteDescription = "What I'm working on";

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <h2>Current Work</h2>

            <Gallery
              projects={CURRENT_PROJECTS.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description
                })
              )}
            />
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              projects={PAST_PROJECTS.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description
                })
              )}
            />

            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}
          </section>
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {
  images: PropTypes.array
};
