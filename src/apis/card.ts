import { api } from '@/request'

export interface Card {
  id: number
}

export interface CardList {
  cards: Card[]
  current: number
  finished: boolean
  error: boolean
}

export const apiGetCards = api('/card', 'get')

export const apiGetPlainCards = api('/plain-card', 'get')

export const apiGetRowCards = api('/row-card', 'get')
