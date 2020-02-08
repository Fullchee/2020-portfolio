import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Layout from "./layout";
import Gallery from "./Gallery";

import { CURRENT_PROJECTS, PAST_PROJECTS } from "../assets/projects";

export default class Portfolio extends React.Component {
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
            <h2>Web Development Work</h2>

            <Gallery projects={PAST_PROJECTS} />

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

Portfolio.propTypes = {
  images: PropTypes.array
};
