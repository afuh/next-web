import axios from 'axios';
import { apiKey } from './utils'

const url = "https://newsapi.org/v1/articles?source=the-next-web"


/*
top:	Requests a list of the source's headlines sorted in the order they appear on its homepage.
latest:	Requests a list of the source's headlines sorted in chronological order, newest first.
popular:	Requests a list of the source's current most popular or currently trending headlines.
*/

export function getNews(sort) {
  return axios.get(`${url}&sortBy=${sort}&apiKey=${apiKey}`)
    .then(res => res.data.articles)
    .catch(err => console.log(err))
}
