import { genStringKey } from 'rattail'
import { createAxle, requestMockInterceptor } from 'rattail/axle'
import { createApi } from 'rattail/axle/api'
import { createUseAxle } from 'rattail/axle/use'

export const axle = createAxle({
  baseURL: import.meta.env.VITE_MOCK_API_BASE,
})

axle.useRequestInterceptor(
  requestMockInterceptor({
    mappings: [
      {
        url: () => true,
        delay: 300,
        handler({ params = {} }) {
          const { current = 1 } = params

          if (current === 3) {
            return {
              data: {
                code: 200,
                data: [],
                message: 'success',
              },
            }
          }

          const data = Array.from({ length: 10 }, () => {
            return {
              id: genStringKey(),
            }
          })

          return {
            data: {
              code: 200,
              message: 'success',
              data,
            },
          }
        },
      },
    ],
  }),
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
  },
})

export const useAxle = createUseAxle({
  axle,
  onTransform: (response) => response.data,
})

export const api = createApi(axle, useAxle)
