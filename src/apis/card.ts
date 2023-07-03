import { useAxle, axle } from '@/request'
import { UseAxleOptions } from '@varlet/axle/use'
import { Response } from './types'

export interface CardModel {
  id: number
}

export interface ApiPageParams {
  current?: number
}

export function useApiGetCards<D>(options?: UseAxleOptions<D, ApiPageParams, Response<CardModel[]>>) {
  return useAxle({
    runner: axle.get,
    url: '/card',
    ...options
  })
}

export function useApiGetPlainCards<D>(options?: UseAxleOptions<D, ApiPageParams, Response<CardModel[]>>) {
  return useAxle({
    runner: axle.get,
    url: '/plain-card',
    ...options
  })
}

export function useApiGetRowCards<D>(options?: UseAxleOptions<D, ApiPageParams, Response<CardModel[]>>) {
  return useAxle({
    runner: axle.get,
    url: '/row-card',
    ...options
  })
}
