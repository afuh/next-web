import React from 'react';
import PropTypes from 'prop-types';

import ArticleHeader from './ArticleHeader'

const LatestArticle = ({ art, cl }) => {
  return (
    <article className={`${cl}__article`}>
      <a href={art.url}className={`${cl}__img`}>
        <img src={art.urlToImage} alt={art.title}/>
      </a>

      <div className={`${cl}__header`}>
        <ArticleHeader
          art={{ title: art.title, author: art.author, date: art.publishedAt, url: art.url}}
          cl={cl}
          dark={true}/>
      </div>
    </article>
  )
}

LatestArticle.propTypes = {
  art: PropTypes.object.isRequired,
  cl: PropTypes.string.isRequired
}


const Latest = ({ news, web }) => {
  const cl = "latest"
  return (
    <section className={`${cl}`}>
      <h2 className={`${cl}__section-title`}><a href={`http://${web.toLowerCase().replace(/\s/g,'')}.com`}>{web}</a></h2>
      <div className={`${cl}__wrapper`}>
        {news.map((art, i) => (
          <LatestArticle key={i} art={art} cl={`${cl}`}/>
        ))}
      </div>
    </section>
  )
}

Latest.propTypes = {
  news: PropTypes.array.isRequired,
  web: PropTypes.string.isRequired
}

export default Latest
