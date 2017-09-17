import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { siteName } from '../helpers/utils';
import { getNews } from '../helpers/api';

import Cover from './Cover';
import Latest from './Latest';


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
          <Cover news={news.filter((a, i) => i < 3)}/>
          <Latest news={news.filter((a, i) => i >= 2)}/>
        </main>
      </DocumentTitle>
    )
  }
}

export default Main;
