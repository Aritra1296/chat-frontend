import axios from "axios"


const instance = axios.create({
  baseURL: 'http://chatmatesapi.aritrarivu.co.in',
  withCredentials: true,
})

export default instance;