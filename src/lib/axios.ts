import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VITE_API_BASE ?? '',
  headers: {
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
})

// Adiciona token automaticamente
api.interceptors.request.use((config) => {
const token = localStorage.getItem('access_token')
if (token) {
config.headers = config.headers || {}
config.headers.Authorization = `Bearer ${token}`
}
return config
})

// Trata 401/403 globalmente
api.interceptors.response.use(
(res) => res,
(err) => {
if (err.response && [401,403].includes(err.response.status)) {
localStorage.removeItem('access_token')
}
return Promise.reject(err)
}
)

export default api
