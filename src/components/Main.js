import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getNews } from '../helpers/api';
import { siteName } from '../helpers/utils';

class Article extends Component {
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

        <a className={`${cl}__header`} href={`${art.url}`}>
          <h2 className={`${cl}__title`}>{art.title}</h2>
          <ul className={`${cl}__credits`}>
            <li>by <span>{art.author}</span></li>
            <li>
              <i className="fa fa-clock-o"></i>
              <time dateTime={art.publishedAt}> {moment(art.publishedAt).fromNow()}</time>
            </li>
          </ul>
        </a>

      </article>
    )
  }
}


Article.propTypes = {
  art: PropTypes.object.isRequired,
  cl: PropTypes.string.isRequired
}


const Cover = ({ news }) => {
  const cl = "cover"
  return (
    <section className={`${cl}`}>
      {news.map((art, i) => {
        if (i < 3) return <Article key={i} art={art} cl={`${cl}`}/>
      })}
    </section>
  )
}



class Main extends Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }
  componentDidMount(){
    getNews().then(news => this.setState({ news }))
  }
  render () {
    const { news } = this.state
    return (
      <DocumentTitle title={`${siteName}`}>
        <main style={{paddingTop: "80px"}}>
          <Cover news={news}/>
        </main>
      </DocumentTitle>
    )
  }
}

export default Main;
