import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import civicTech from '../assets/images/fulls/civic-tech.jpg'
import chineseChess from '../assets/images/fulls/really-bad-chinese-chess.jpg'
import owasp from '../assets/images/fulls/owasp-toronto.jpeg'
import dotFiles from '../assets/images/fulls/dotfiles.jpg'
import carDetail from '../assets/images/fulls/car-detail-exchange.jpg'
import delayDarkEra from '../assets/images/fulls/delay-the-dark-era.jpg'
import dragonBoatCalls from '../assets/images/fulls/dragon-boat-calls.jpg'

const CURR_PROJECTS = [
  {
    id: '1',
    src: civicTech,
    thumbnail: civicTech,
    caption: 'Civic Tech Toronto Volunteer',
    description: 'Attending weekly hacknights',
  },
  {
    id: '2',
    src: chineseChess,
    thumbnail: chineseChess,
    caption: 'Chinese Chess with React!',
    description: 'Built with React, React Testing Library, webpack, and SCSS.',
  },
]

const PAST_PROJECTS = [
  {
    id: '1',
    src: dragonBoatCalls,
    thumbnail: dragonBoatCalls,
    caption: 'Static Site for learning dragon boat calls',
    description: 'Vanilla JS site with descriptions and videos',
    code: 'https://github.com/Fullchee/dragon-boat-calls',
    demo: 'https://fullchee.github.io/dragon-boat-calls',
  },
  {
    id: '2',
    src: carDetail,
    thumbnail: carDetail,
    caption: 'Car Detail Exchange',
    description: 'Made with Node.js, Express.js and MySQL',
    demo: 'https://hidden-shore-40090.herokuapp.com/',
  },
  {
    id: '3',
    src: dotFiles,
    thumbnail: dotFiles,
    caption: 'Dotfiles Repository for Ubuntu',
    description: 'zsh, git, npm and other configuration files',
    code: 'https://github.com/Fullchee/dotfiles',
  },
  {
    id: '4',
    src: null,
    thumbnail: null,
    caption: 'Post Install Scripts',
    description:
      'Scripts and checklists for setting up my dev environments for Linux, Mac and Windows.',
    code: 'https://github.com/Fullchee/post-install-scripts',
  },
  {
    id: '5',
    src: null,
    thumbnail: null,
    caption: 'Implemented the software of a router',
    description:
      'Used a Linux Virtual Machine to program the router and Built with mininet to support TCP, ICMP and NAT',
  },
  {
    id: '6',
    src: delayDarkEra,
    thumbnail: delayDarkEra,
    caption: 'HTML5 Game: Delay the Dark Era',
    description: 'HTML5 Game with the mouse',
    code: 'https://github.com/Fullchee/delay-the-dark-era',
    demo: 'https://fullchee.github.io/delay-the-dark-era/',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = "Fullchee's Portfolio"
    const siteDescription = "What I'm working on"

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
              images={CURR_PROJECTS.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={PAST_PROJECTS.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
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
    )
  }
}

export default HomeIndex
