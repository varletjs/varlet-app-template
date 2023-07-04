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
    url: '/card',
    runner: axle.get,
    ...options
  })
}

export function useApiGetPlainCards<D>(options?: UseAxleOptions<D, ApiPageParams, Response<CardModel[]>>) {
  return useAxle({
    url: '/plain-card',
    runner: axle.get,
    ...options
  })
}

export function useApiGetRowCards<D>(options?: UseAxleOptions<D, ApiPageParams, Response<CardModel[]>>) {
  return useAxle({
    url: '/row-card',
    runner: axle.get,
    ...options
  })
}
