import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const ArticleHeader = ({ art, cl, dark }) => {
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

export default ArticleHeader;
