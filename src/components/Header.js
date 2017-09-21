import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Iconize, logo } from '../helpers/utils'

const Nav = ({ left, right, navClass }) => {
  return (
    <div className={`nav nav__${navClass}`}>
      <ul className="nav__left">
        {left.map(item => (
          <li key={item} className="nav__li"><a href="#">{item}</a></li>
        ))}
      </ul>
      <ul className="nav__right">
        {right.map(item => (
          <li key={item} className="nav__li"><a href="#">{item}</a></li>
        ))}
      </ul>
    </div>
  )
}

Nav.propTypes = {
  left: PropTypes.array.isRequired,
  right: PropTypes.array.isRequired,
  navClass: PropTypes.string.isRequired
};


class MainNav extends Component {
  constructor(){
    super()
    this.state = {
      navTop: 0,
      navHeight: { height: 0 }
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    this.setState({
      navTop: this.nav.offsetTop,
      navHeight: {
        height: this.nav.offsetHeight + "px"
      }
    })
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(){
    const { navTop } = this.state
    if (window.scrollY >= navTop) {
      document.body.classList.add('fixed-nav')
    }
    else {
      document.body.classList.remove('fixed-nav')
    }
  }
  render () {
    const { navClass, left, right } = this.props
    return (
      <nav className={`nav nav__${navClass}`} ref={nav => this.nav = nav} style={this.state.navHeight}>
          <div className="logo"><img src={logo} alt="TNW logo"/></div>
          <ul className="nav__left">
            {left.map(item => (
              <li key={item} className="nav__li"><a href="#">{item}</a></li>
            ))}
          </ul>
          <ul className="nav__right">
            {right.map(item => (
              <li key={item} className="nav__li"><Iconize iconName={item}/></li>
            ))}
          </ul>
      </nav>
    )
  }
}

MainNav.propTypes = {
  left: PropTypes.array.isRequired,
  right: PropTypes.array.isRequired,
  navClass: PropTypes.string.isRequired
};


const Header = () => {
  const nav = {
    first: {
      left: ['News', 'Conference', 'Index', 'TQ', 'Deals', 'Answers', 'TNW X'],
      right: ['About', 'Team', 'Advertise', 'Jobs', 'Contact']
    },
    second: {
      left: ['Latests', 'Insights', 'Distract'],
      right: ['facebook-official', 'twitter', 'envelope', 'ellipsis-h', 'search']
    }
  }
  return (
    <header>
      <Nav left={nav.first.left} right={nav.first.right} navClass={'first'}/>
      <MainNav left={nav.second.left} right={nav.second.right} navClass={'second'}/>
    </header>
  )
}

export default Header;
