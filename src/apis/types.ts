import { UseAxleOptions } from '@varlet/axle/use'

export interface Response<T> {
  data: T
  code: number
  message: string
}

export interface PageParams {
  current?: number
}

export type Options<V, R, P> = Partial<UseAxleOptions<V, R, P>>
