import { createAxle } from '@varlet/axle'
import { createUseAxle } from '@varlet/axle/use'

const axle = createAxle({
  baseURL: import.meta.env.VITE_MOCK_API_BASE
})

axle.axios.interceptors.response.use(
  (response) => {
    if (response.data.code !== 200 && response.data.message) {
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
