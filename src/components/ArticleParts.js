import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export const ArticleHeader = ({ art, cl, dark }) => {
  const style = {
    title: {
      color: dark ? "#000" : "#fff",
      marginBottom: "2px",
      letterSpacing: "-.015em"
    },
    credits: {
      marginRight: "14px",
      display: "inline",
      color: "#d8d8d8",
      fontSize: "12px"
    },
    author: {
      color: "#9E9E9E"
    }
  }
  const { title, author, date, url } = art
  return (
    <div>
      <a href={url}>
        <h2 style={style.title} className={`${cl}__title`}>{title}</h2>
      </a>
      <ul className={`${cl}__credits`}>
        {author ? <li style={style.credits}><a href="#" style={style.author}>{author}</a></li> : ""}
        <li style={style.credits}>
          <i className="fa fa-clock-o"></i>
          <time dateTime={date}> {moment(date).fromNow()}</time>
        </li>
      </ul>
    </div>
  )
}

ArticleHeader.propTypes = {
  art: PropTypes.object.isRequired,
  cl: PropTypes.string.isRequired,
  dark: PropTypes.bool
}

export class ArticleBox extends Component {
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
