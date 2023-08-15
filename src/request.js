import axios from 'axios'

const config = {
  timeout: 1000 * 10,
}

config.baseURL = 'http://127.0.0.1:8081'

const service = axios.create(config)

service.interceptors.request.use((config) => {
  return config
})

export default service
