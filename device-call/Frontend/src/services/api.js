import axios from 'axios'

const api = axios.create({
  baseURL : "http://192.168.1.12:5500/api",
  // baseURL : "http://localhost:5000/api",
})
export default api;



// import axios from 'axios'

// const api = axios.create({
//   baseURL : "http://localhost:5000/api",
// })
// export default api;
