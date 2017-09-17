import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleHeader from './ArticleHeader'

class ArticleBox extends Component {
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
    const gutter = 8
    const style = {
      img: {
        width: `calc(100% - ${gutter}px)`,
        height: `calc(100% - ${gutter}px)`,
        background: `url(${art.urlToImage}) center center / cover no-repeat`,
        position: "absolute",
        top: `${gutter/2}px`, left: `${gutter/2}px`,
        zIndex: "-1"
      },
      overlay: {
        width: `calc(100% - ${gutter}px)`,
        height: `calc(100% - ${gutter}px)`,
        opacity: this.state.opacity,
        transition: "opacity .4s",
        position: "absolute",
        top: `${gutter/2}px`, left: `${gutter/2}px`,
        background: "linear-gradient(to top, #000, transparent)"
      },
      article: {
        display: "flex",
        alignItems: "flex-end",
        padding: `${gutter}px`,
        position: "relative"
      },
      header: {
        width: "100%",
        zIndex: "9999",
        padding: "10px",
      }
    }
    return (
      <article className={`${cl}__article`}
        onMouseEnter={() => this.handleOpacity(true)}
        onMouseLeave={() => this.handleOpacity()}
        style={style.article}>

        <div className={`${cl}__img`} style={style.img}></div>
        <a className={`${cl}__overlay`} href={`${art.url}`} style={style.overlay}></a>

        <div className={`${cl}__header`} style={style.header}>
          <ArticleHeader
            dark={false}
            art={{ title: art.title, author: art.author, date: art.publishedAt, url: art.url}}
            cl={cl}/>
        </div>
      </article>
    )
  }
}

ArticleBox.propTypes = {
  art: PropTypes.object.isRequired,
  cl: PropTypes.string.isRequired
}

export default ArticleBox
