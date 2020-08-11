import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import ProfilePic from "../assets/images/avatar.jpg";

import Layout from "./layout";
import Gallery from "./Gallery";

import { PAST_PROJECTS } from "../assets/projects";

export default class Portfolio extends React.Component {
  render() {
    const siteTitle = "Fullchee's Web Dev Work";
    const siteDescription = "Projects I've been working on";
    const keywords = "web developer, react, javascript, JS, gatsby";

    return (
      <Layout>
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          title={siteTitle}
          meta={[
            { name: "description", content: siteDescription },
            { name: "keywords", content: keywords },
            { name: "og:title", content: siteTitle },
            { name: "og:url", content: "fullchee.com" },
            { name: "og:description", content: siteDescription },
            { name: "og:image", content: ProfilePic },
          ]}
        ></Helmet>

        <div id="main">
          <section id="one">
            <h1>Web Dev Work</h1>
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
  images: PropTypes.array,
};
