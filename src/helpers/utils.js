import React from 'react';
import PropTypes from 'prop-types';

export const siteName = 'The Next Web | International technology news, business & culture';

export const logo = 'https://cdn0.tnwcdn.com/wp-content/themes/cyberdelia/assets/img/tnw.svg'

export const icon = file => require(`../images/${file}`)

export const Iconize = ({iconName}) => (
  <a href="#" className="iconList__icon">
    <i className={`fa fa-${iconName}`} aria-hidden="true"></i>
  </a>
)

Iconize.propTypes = {
  iconName: PropTypes.string.isRequired
}
