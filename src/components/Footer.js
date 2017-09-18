import React from 'react';
import PropTypes from 'prop-types';

import { Iconize } from '../helpers/utils'

const events = ["TNW NYC"]
const companies = ["Amazon", "eBay", "Facebook", "Google", "Yahoo"];
const topics = ["iPhone", "MacBook", "Playstation", "Samsung Galaxy", "YouTube"]
const iconNames = ['facebook-official', 'twitter', 'youtube-play', 'instagram', 'pinterest-p', 'feed', 'envelope']
const menu = ["Events", "About", "Team", "Advertise", "Jobs", "Contacts"]


const SocialBlock = () => (
  <div>
    <ul className="iconList">
      {iconNames.map(icon => (
        <li key={icon}>
          <Iconize iconName={icon} />
        </li>
      ))}
    </ul>
    <ul className="menu">
      {menu.map(i => (
        <li key={i}>
          <a href="#">{i}</a>
        </li>
      ))}
    </ul>
  </div>
)

const TrendingBlock = ({title, cl, list}) => {
  return (
    <div className={`block block__${cl}`}>
      <h3>{title}</h3>
      <ul>
        {list.map(i => (
          <li key={i}>
            <a href="#">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

TrendingBlock.propTypes = {
  title: PropTypes.string.isRequired,
  cl: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

const LegalBlock = ({brand, location}) => (
  <div className="wrapper">
    <span>© 2017 {brand}. Made with <span style={{color: "#F42", margin:"0 0.5em"}}> ♥ </span> in {location}.</span>
  </div>
)

LegalBlock.propTypes = {
  brand: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}




const Footer = () => {
  const cl = 'footer'
  return (
    <footer className={cl}>

      <div className={`${cl}__trending`}>
        <div className="wrapper">
          <TrendingBlock title="Upcoming Events" cl="events" list={events}/>
          <TrendingBlock title="Popular Companies" cl="companies" list={companies}/>
          <TrendingBlock title="Trending Topics" cl="topics" list={topics}/>
        </div>
      </div>

      <div className={`${cl}__links`}>
        <SocialBlock />
      </div>

      <div className={`${cl}__legal`}>
        <LegalBlock brand="The Next Web" location="Amsterdam"/>
      </div>

    </footer>
  )
}

export default Footer
