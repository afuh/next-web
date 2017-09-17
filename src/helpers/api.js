import axios from 'axios';
import { apiKey } from './utils'

const handleError = (err) => console.log(err)
const url = "https://newsapi.org/v1/articles?source="

const call = (web) => {
  return axios.get(`${url}${web}&apiKey=${apiKey}`)
    .then(res => res.data.articles)
    .catch(err => handleError(err))
}

export const getNews = () => (axios.all([
    call('the-next-web'),
    call('ign'),
    call('ars-technica'),
    call('national-geographic')
  ]))
  .then(([nextWeb, ign, arsTechnica, natGeo]) => ({ nextWeb, ign, arsTechnica, natGeo}))
  .catch(err => handleError(err))
