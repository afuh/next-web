import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleHeader from './ArticleHeader'

class CoverArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1
    }
  }
  handleOpacity (enter) {
    if (enter) {
      this.setState({ opacity: 0.8 })
    }
    else {
      this.setState({ opacity: 1 })
    }
  }
  render () {
    const { art, cl } = this.props
    const style = {
      img: {
        background: `url(${art.urlToImage}) center center / cover no-repeat`
      },
      overlay: {
        opacity: this.state.opacity,
        transition: "opacity .4s"
      }
    }
    return (
      <article className={`${cl}__article`}
        onMouseEnter={() => this.handleOpacity(true)}
        onMouseLeave={() => this.handleOpacity()}>

        <div className={`${cl}__img`} style={style.img}></div>
        <a className={`${cl}__overlay`} href={`${art.url}`} style={style.overlay}></a>

        <div className={`${cl}__header`}>
          <ArticleHeader
            dark={false}
            art={{ title: art.title, author: art.author, date: art.publishedAt, url: art.url}}
            cl={cl}/>
        </div>

      </article>
    )
  }
}

CoverArticle.propTypes = {
  art: PropTypes.object.isRequired,
  cl: PropTypes.string.isRequired
}


const Cover = ({ news }) => {
  const cl = "cover"
  return (
    <section className={`${cl}`}>
      {news.map((art, i) => {
        if (i < 3) return <CoverArticle key={i} art={art} cl={`${cl}`}/>
      })}
    </section>
  )
}

Cover.propTypes = {
  news: PropTypes.array.isRequired,
}

export default Cover
