import axios from 'axios'

const api = axios.create({
  baseURL : "https://192.168.1.10:5000/api",
  // baseURL : "http://localhost:5000/api",
})
export default api;



// import axios from 'axios'

// const api = axios.create({
//   baseURL : "http://localhost:5000/api",
// })
// export default api;
