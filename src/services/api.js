import axios from 'axios'

const api = axios.create({
  baseURL: 'https://lp.altoqi.com.br/wp-json/wp/v2/pages/13985'
})

export default api;
