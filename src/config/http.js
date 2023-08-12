import axios from 'axios'

const token = ""

export default axios.create({
   baseURL: 'http://api.totalcareeurope.website',
  headers: {
    'Content-type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
})