import axios from 'axios'

const api = axios.create({
  baseURL: 'http://fipe.parallelum.com.br/api/v2',
})

export default api
