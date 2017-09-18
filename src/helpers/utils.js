import React from 'react';
import PropTypes from 'prop-types';

export const siteName = 'The Next Web | International technology news, business & culture';

export const icon = file => require(`../images/${file}`)

export const Iconize = ({iconName}) => (
  <a target="_blank" href="#" className="iconList__icon">
    <i className={`fa fa-${iconName}`} aria-hidden="true"></i>
  </a>
)

Iconize.propTypes = {
  iconName: PropTypes.string.isRequired
}
