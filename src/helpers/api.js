import axios from 'axios';
import { apiKey } from './utils'

const url = "https://newsapi.org/v1/articles?source=the-next-web"


export function getNews() {
  return axios.get(`${url}&sortBy=latest&apiKey=${apiKey}`)
    .then(res => res.data.articles)
    .catch(err => console.log(err))
}
