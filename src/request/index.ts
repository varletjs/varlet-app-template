import { createAxle } from '@varlet/axle'
import { createUseAxle } from '@varlet/axle/use'

const axle = createAxle({
  baseURL: '/api'
})

const useAxle = createUseAxle()

axle.axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data
    }

    Snackbar.warning(response.data.message)
  },
  (error) => {
    Snackbar.error(error.message)
    return Promise.reject(error)
  }
)

export { axle, useAxle }
