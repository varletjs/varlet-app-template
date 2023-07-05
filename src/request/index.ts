import { createAxle } from '@varlet/axle'
import { createUseAxle } from '@varlet/axle/use'

const axle = createAxle({
  baseURL: '/api'
})

axle.axios.interceptors.response.use(
  (response) => {
    if (response.data.code !== 200) {
      Snackbar.warning(response.data.message)
    }

    return response.data
  },
  (error) => {
    Snackbar.error(error.message)
    return Promise.reject(error)
  }
)

const useAxle = createUseAxle({
  onTransform: (response) => response.data
})

export { axle, useAxle }
