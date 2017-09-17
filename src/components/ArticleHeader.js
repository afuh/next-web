import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const ArticleHeader = ({ art, cl, dark }) => {
  const style = {
    title: {
      color: dark ? "#000" : "#fff",
      marginBottom: "10px",
      letterSpacing: "-.015em"
    },
    credits: {
      marginRight: "20px",
      display: "inline",
      color: "#9E9E9E",
      fontSize: "14px"
    },
    author: {
      color: "#d8d8d8"
    }
  }
  const { title, author, date, url } = art
  return (
    <div>
      <a href={url}>
        <h2 style={style.title} className={`${cl}__title`}>{title}</h2>
      </a>
      <ul className={`${cl}__credits`}>
        <li style={style.credits}>by <a href="#" style={style.author}>{author}</a></li>
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
