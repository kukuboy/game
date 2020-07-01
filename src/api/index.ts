import Api from '@/utils/request'

export const getData = () => {
  return Api.getData()
}
export const loginIn = (data: object, methods: string = 'GET') => {
  return Api.loginIn(data, methods)
}
export const getPower = (data: object, methods: string = 'GET') => {
  return Api.getPower(data, methods)
}
export const getLevel = (data: object, methods: string = 'GET') => {
  return Api.getLevel(data, methods)
}

