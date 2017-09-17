import React from 'react';

const Footer = () => {
  const cl = 'footer'
  return (
    <footer className={cl}>
      <div className={`${cl}__trending`}></div>
      <div className={`${cl}__links`}></div>
      <div className={`${cl}__legal`}></div>
    </footer>
    )
}

export default Footer
