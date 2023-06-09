import { useAxle, axle, api } from '@/request'

export const apiUser = api('/user')

export type Response<T> = {
  data: T
  code: number
  message: string
}

export interface User {
  id?: number
  name: string
}

export function useApiGetUsers() {
  return useAxle<User[]>({
    url: apiUser(),
    runner: axle.get
  })
}

export function useApiGetUser(id: string | number) {
  return useAxle<User>({
    url: apiUser(id),
    runner: axle.get
  })
}

export function useApiAddUser() {
  return useAxle<Response<User>>({
    url: apiUser(),
    runner: axle.postJSON,
    immediate: false
  })
}

export function useApiDeleteUser() {
  return useAxle<Response<User>>({
    runner: axle.delete,
    immediate: false
  })
}

export function useApiUpdateUser() {
  return useAxle<Response<User>>({
    runner: axle.putJSON,
    immediate: false
  })
}

export function useApiPatchUser() {
  return useAxle<Response<User>>({
    runner: axle.patchJSON,
    immediate: false
  })
}
