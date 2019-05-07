import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Fullchee Zhang</strong>
          </h1>
          <h2>Full Stack Developer</h2>
          Toronto bred <a href="">U of T CS Grad</a> with a passion for the
          process of learning
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
