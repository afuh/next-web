import React from 'react';
import PropTypes from 'prop-types';

import ArticleBox from './ArticleBox'

const Cover = ({ news }) => {
  const cl = "cover"
  return (
    <section className={cl}>
      {news.map((art, i) => {
        if (i < 3) return <ArticleBox key={i} art={art} cl={cl}/>
      })}
    </section>
  )
}

Cover.propTypes = {
  news: PropTypes.array.isRequired,
}

export default Cover
