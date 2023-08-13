import axios from 'axios'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxZGU0MGJhLWRiZDctNDhlYy04ODc5LWFmMWY3M2FiNWU1NiIsImZpcnN0TmFtZSI6IlRvdGFsIiwibGFzdE5hbWUiOiJBZG1pbiIsInJvbGUiOiJBRE1JTiIsInJlZ2lzdHJhdGlvblN0YXR1cyI6IkZVTExZIFJFR0lTVEVSRUQiLCJpYXQiOjE2OTE5MzczNjQsImV4cCI6MTY5MTk4MDU2NH0.WshKP_EgpIQvCWxUIf8XTdGwu7iNu9P1u9sd0dK9OKY"
export default axios.create({
   baseURL: 'http://api.totalcareeurope.website',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})