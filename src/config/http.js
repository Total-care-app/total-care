import axios from 'axios'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxZGU0MGJhLWRiZDctNDhlYy04ODc5LWFmMWY3M2FiNWU1NiIsImZpcnN0TmFtZSI6IlRvdGFsIiwibGFzdE5hbWUiOiJBZG1pbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5MTgzNDQ4MCwiZXhwIjoxNjkxODc3NjgwfQ.WZeDluuIQbEyW4YCMEytu8RbSKGBWGPrrW6ACa-VWOM"

export default axios.create({
   baseURL: 'http://api.totalcareeurope.website',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})