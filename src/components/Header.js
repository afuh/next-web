import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({left, right, navClass}) => {
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


const Header = () => {
  const nav = {
    first: {
      left: ['News', 'Conference', 'Index', 'TQ', 'Deals', 'Answers', 'TNW X'],
      right: ['About', 'Team', 'Advertise', 'Jobs', 'Contact']
    },
    second: {
      left: ['Latests', 'Insights', 'Distract'],
      right: ['Facebook', 'Twitter', 'Mail', 'Search']
    }
  }
  return (
    <header>
      <Nav left={nav.first.left} right={nav.first.right} navClass={'first'}/>
      <Nav left={nav.second.left} right={nav.second.right} navClass={'second'}/>
    </header>
  )
}

export default Header;
