import React from 'react';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

import { getNews } from '../helpers/api';
import { siteName } from '../helpers/utils';


class Main extends React.Component {
  componentDidMount(){
    // getNews('latest').then(data => console.log(data)) 
  }
  render () {
    return (
      <DocumentTitle title={`${siteName} | Home`}>
        <div className="home">
          <h1>ba bla bl</h1>
        </div>
      </DocumentTitle>
    )
  }
}

export default Main;


// const Home = () => {
//   return (
//     <DocumentTitle title={`${siteName} | Home`}>
//       <div className="home">
//         <h1>ba bla bla</h1>
//       </div>
//     </DocumentTitle>
//   )
// }
//
// export default Home;
