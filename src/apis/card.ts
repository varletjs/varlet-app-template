import { useAxle, axle } from '@/request'
import { Response, UseApiOptions } from './types'

export interface CardModel {
  id: number
}

export interface ApiPageParams {
  current?: number
}

export function useApiGetCards<D>(options: UseApiOptions<D, Response<CardModel[]>, ApiPageParams>) {
  return useAxle({
    url: '/card',
    runner: axle.get,
    ...options
  })
}

export function useApiGetPlainCards<D>(options: UseApiOptions<D, Response<CardModel[]>, ApiPageParams>) {
  return useAxle({
    url: '/plain-card',
    runner: axle.get,
    ...options
  })
}

export function useApiGetRowCards<D>(options: UseApiOptions<D, Response<CardModel[]>, ApiPageParams>) {
  return useAxle({
    url: '/row-card',
    runner: axle.get,
    ...options
  })
}
