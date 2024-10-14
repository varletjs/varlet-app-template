// https://github.com/varletjs/axle
import { createAxle, requestMockInterceptor } from '@varlet/axle'
import { createApi } from '@varlet/axle/api'
import { createUseAxle } from '@varlet/axle/use'
import Mock from 'mockjs'

export const axle = createAxle({
  baseURL: import.meta.env.VITE_MOCK_API_BASE
})

axle.useRequestInterceptor(
  requestMockInterceptor({
    mappings: [
      {
        url: '/**',
        delay: 300,
        handler({ params = {} }) {
          const { current = 1 } = params

          if (current === 3) {
            return {
              data: {
                code: 200,
                data: [],
                message: 'success'
              }
            }
          }

          const data = Array.from({ length: 10 }, () => {
            return {
              id: Mock.Random.id()
            }
          })

          return {
            data: {
              code: 200,
              message: 'success',
              data
            }
          }
        }
      }
    ]
  })
)

axle.useResponseInterceptor({
  onFulfilled(response) {
    const { code, message } = response.data

    if (code !== 200 && message) {
      Snackbar.warning(message)
    }

    return response.data
  },

  onRejected(error) {
    Snackbar.error(error.message)
    return Promise.reject(error)
  }
})

export const useAxle = createUseAxle({
  axle,
  onTransform: (response) => response.data
})

export const api = createApi(axle, useAxle)
