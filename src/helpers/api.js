import axios from 'axios';
import { apiKey } from './key'

const handleError = (err) => console.log(err)
const url = "https://newsapi.org/v1/articles?source="

const call = (web, sort="latest") => {
  return axios.get(`${url}${web}&sortBy=${sort}&apiKey=${apiKey}`)
    .then(res => res.data.articles)
    .catch(err => handleError(err))
}

export const getNews = () => (axios.all([
    call('the-next-web'),
    call('new-scientist', 'top'),
    call('ars-technica'),
    call('national-geographic', "top"),
    call('polygon', 'top')
  ]))
  .then(([nextWeb, newScientist, arsTechnica, natGeo, polygon]) => ({ nextWeb, newScientist, arsTechnica, natGeo, polygon}))
  .catch(err => handleError(err))
