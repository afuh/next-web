import React from 'react';
import { render } from 'react-dom';

import "./main.sass";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="main">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

render( <App/>, document.getElementById('root'))
