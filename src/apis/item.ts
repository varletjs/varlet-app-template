import { api } from '@/request'

export interface Item {
  id: number
}

export const apiGetItems = api<Res<Item[]>>('/card', 'get')

export const apiGetPlainItems = api<Res<Item[]>>('/plain-item', 'get')

export const apiGetRowItems = api<Res<Item[]>>('/row-item', 'get')
