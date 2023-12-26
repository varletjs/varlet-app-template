// https://github.com/varletjs/axle
import { createAxle, requestMockInterceptor, RunnerMethod, AxleRequestConfig } from '@varlet/axle'
import { createUseAxle, UseAxleOptions } from '@varlet/axle/use'
import Mock from 'mockjs'

export interface Response<T> {
  data: T
  code: number
  message: string
}

export type Options<V, R, P> = Partial<UseAxleOptions<V, R, P>>

export const axle = createAxle({
  baseURL: import.meta.env.VITE_MOCK_API_BASE
})

axle.useRequestInterceptor(
  requestMockInterceptor({
    mappings: [
      {
        url: '/**',
        delay: 300,
        handler({ params }) {
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

export function api(url: string, method: RunnerMethod) {
  function load<V, P = Record<string, any>>(params?: P, config?: AxleRequestConfig): Promise<Response<V>> {
    return axle[method](url, params, config)
  }

  function use<V, RV = V, P = Record<string, any>, R = Response<RV>>(options: Options<V, R, P> = {}) {
    return useAxle({ url, method, ...options })
  }

  return {
    url,
    load,
    use
  }
}
