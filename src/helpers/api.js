import axios from 'axios';
import { apiKey } from './utils'

const handleError = (err) => console.log(err)
const url = "https://newsapi.org/v1/articles?source="

const call = (web, sort="latest") => {
  return axios.get(`${url}${web}&sortBy=${sort}&apiKey=${apiKey}`)
    .then(res => res.data.articles)
    .catch(err => handleError(err))
}

export const getNews = () => (axios.all([
    call('the-next-web'),
    call('ign'),
    call('ars-technica'),
    call('national-geographic', "top"),
    call('google-news', 'top')
  ]))
  .then(([nextWeb, ign, arsTechnica, natGeo, googleNews]) => ({ nextWeb, ign, arsTechnica, natGeo, googleNews}))
  .catch(err => handleError(err))
