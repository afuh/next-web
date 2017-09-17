import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { siteName } from '../helpers/utils';
import { getNews } from '../helpers/api';

import Cover from './Cover';
import Latest from './Latest';
import LatestBox from './LatestBox';


class Main extends Component {
  constructor() {
    super()
    this.state = {
      nextWeb: [],
      ign: [],
      arsTechnica: [],
      natGeo: [],
      polygon: [],
      cover: []
    }
  }
  componentDidMount(){
    const r = () => Math.floor(Math.random() * (9 - 0 + 1)) + 0
    getNews()
      .then(n => this.setState({
        nextWeb: n.nextWeb,
        ign: n.ign,
        arsTechnica: n.arsTechnica,
        natGeo: n.natGeo,
        polygon: n.polygon,
        cover: [n.natGeo[r()], n.ign[r()], n.arsTechnica[r()], n.nextWeb[r()], n.polygon[r()]]
    }))
  }
  randomCover(arr){
    return arr.sort(() => (arr.length/10) - Math.random()).splice(1)
  }
  render () {
    const { nextWeb, ign, arsTechnica, natGeo, polygon, cover } = this.state
    return (
      <DocumentTitle title={`${siteName}`}>
        <main style={{paddingTop: "80px"}}>
          <Cover news={this.randomCover(cover)}/>
          <Latest web={'The Next Web'} news={nextWeb.filter((a, i) => i < 8)}/>

          <section className="web__columns">
            <LatestBox web={'National Geographic'} news={natGeo.filter((a, i) => i < 8)}/>
            <LatestBox web={'Polygon'} news={polygon.filter((a, i) => i < 8)}/>
            <LatestBox web={'IGN'} news={ign.filter((a, i) => i < 8)}/>
          </section>

          <Latest web={'Ars Technica'} news={arsTechnica.filter((a, i) => i < 8)}/>


        </main>
      </DocumentTitle>
    )
  }
}

export default Main;

/*
    <LatestBox web={'National Geographic'} news={natGeo.filter((a, i) => i < 6)}/>
    <LatestBox web={'IGN'} news={ign.filter((a, i) => i < 6)}/>
    */
