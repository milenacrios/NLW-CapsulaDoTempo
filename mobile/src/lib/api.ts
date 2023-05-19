import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.15.4:3333',
  timeout: 3000,
  timeoutErrorMessage: 'Não foi possivel se conectar com servidor',
})
