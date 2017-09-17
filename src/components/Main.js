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
      cover: [],
      nextWeb: [],
      ign: [],
      arsTechnica: [],
      natGeo: []
    }

  }
  componentDidMount(){
    getNews()
      .then(n => this.setState({
        nextWeb: n.nextWeb,
        ign: n.ign,
        arsTechnica: n.arsTechnica,
        natGeo: n.natGeo,
        cover: [n.natGeo[0], n.ign[0], n.arsTechnica[0], n.nextWeb[0]]
    }))
  }
  randomCover(arr){
    return arr.sort(() => (arr.length/10) - Math.random())
  }
  render () {
    const { nextWeb, ign, arsTechnica, natGeo, cover } = this.state
    return (
      <DocumentTitle title={`${siteName}`}>
        <main style={{paddingTop: "80px"}}>
          <Cover news={this.randomCover(cover)}/>
          <Latest web={'The Next Web'} news={nextWeb.filter((a, i) => i < 8)}/>
        </main>
      </DocumentTitle>
    )
  }
}

export default Main;
