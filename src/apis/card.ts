import { useAxle, axle } from '@/request'
import { PageParams, Response, Options } from './types'

export interface Card {
  id: number
}

export function useApiGetCards<D>(data: D, options?: Options<D, Response<Card[]>, PageParams>) {
  return useAxle({
    data,
    url: '/card',
    runner: axle.get,
    ...options
  })
}

export function useApiGetPlainCards<D>(data: D, options?: Options<D, Response<Card[]>, PageParams>) {
  return useAxle({
    data,
    url: '/plain-card',
    runner: axle.get,
    ...options
  })
}

export function useApiGetRowCards<D>(data: D, options?: Options<D, Response<Card[]>, PageParams>) {
  return useAxle({
    data,
    url: '/row-card',
    runner: axle.get,
    ...options
  })
}
