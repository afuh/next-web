import React from 'react';
import PropTypes from 'prop-types';

import ArticleBox from './ArticleBox'

const LatestBox = ({ news, web }) => {
  const cl = "latestBox"
  const url = `http://${web.toLowerCase().replace(/\s/g,'')}.com`
  return (
    <section className={`${cl}__wrapper`}>
      <h2 className={`${cl}__section-title`}>
        <a href={url}>{web}</a>
      </h2>
      <ul className={`${cl}__list`}>
      {news.map((art, i) => {
        if (i === 0) {
          return <ArticleBox key={i} art={art} cl={cl}/>
        }
        else {
          return (
            <li key={i} className={`${cl}__headlines`}>
              <a href={art.url}>{art.title}</a>
            </li>
          )
        }
      })}
    </ul>
  </section>
  )
}

LatestBox.propTypes = {
  news: PropTypes.array.isRequired,
  web: PropTypes.string.isRequired
}


export default LatestBox
