import { useAxle } from '@/request'
import { PageParams, Response, Options } from './types'

export interface Card {
  id: number
}

export function useGetCards<V>(options: Options<V, Response<Card[]>, PageParams>) {
  return useAxle({
    url: '/card',
    method: 'get',
    ...options
  })
}

export function useGetPlainCards<V>(options: Options<V, Response<Card[]>, PageParams>) {
  return useAxle({
    url: '/plain-card',
    method: 'get',
    ...options
  })
}

export function useGetRowCards<V>(options: Options<V, Response<Card[]>, PageParams>) {
  return useAxle({
    url: '/row-card',
    method: 'get',
    ...options
  })
}
