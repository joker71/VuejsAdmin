import axios from 'axios'
import { APIURL } from '@/services/Constant'

export default axios.create({
  baseURL: APIURL,
  headers: {
    'Content-type': 'application/json'
  }
})
