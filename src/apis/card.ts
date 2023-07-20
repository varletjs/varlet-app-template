import { useAxle, axle } from '@/request'
import { PageParams, Response, Options } from './types'

export interface Card {
  id: number
}

export function useGetCards<D>(options: Options<D, Response<Card[]>, PageParams>) {
  return useAxle({
    url: '/card',
    runner: axle.get,
    ...options
  })
}

export function useGetPlainCards<D>(options: Options<D, Response<Card[]>, PageParams>) {
  return useAxle({
    url: '/plain-card',
    runner: axle.get,
    ...options
  })
}

export function useGetRowCards<D>(options: Options<D, Response<Card[]>, PageParams>) {
  return useAxle({
    url: '/row-card',
    runner: axle.get,
    ...options
  })
}
