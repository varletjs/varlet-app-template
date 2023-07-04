import { UseAxleOptions } from '@varlet/axle/use'

export interface Response<T> {
  data: T
  code: number
  message: string
}

export type UseApiOptions<D = any, R = any, P = Record<string, any>> = Pick<UseAxleOptions<D, R, P>, 'data'> &
  Partial<Omit<UseAxleOptions<D, R, P>, 'data'>>
