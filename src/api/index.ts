import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios'
import Authorization from './authorization'

export interface IQueryPearans {
  [key: string]: string
}

export default class Api {
  instance: AxiosInstance
  refreshRequst: AxiosPromise | null = null

  auth = new Authorization(this)

  constructor() {
    this.instance = axios.create({ baseURL: 'http://localhost:3000', headers: { 'Content-Type': 'application/json' } })
    this.requestInterceptor()
    this.responseInterceptor()
  }

  get<T>(url: string, params?: IQueryPearans): AxiosPromise<T> {
    return this.instance({
      url,
      params
    })
  }

  post<T>(url: string, data?: any): AxiosPromise<T> {
    return this.instance({
      method: 'POST',
      url,
      data
    })
  }

  requestInterceptor() {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const accessToken = localStorage.getItem('accessToken')

        if (!accessToken) return config

        return {
          ...config,
          headers: { ...config.headers, Autorization: `Bearer ${accessToken}` }
        }
      },
      (error) => { throw error}
    )
  }

  responseInterceptor() {
    this.instance.interceptors.response.use(
      response => response,
      async error => {
        const refreshToken = localStorage.getItem('refreshToken')

        if (!refreshToken || error.response.status !== 401 || error.config.retry) {
          throw error
        }

        if (!this.refreshRequst) {
          this.refreshRequst = this.post('/auth/refresh-token', { refreshToken })
        }

        const { data } = await this.refreshRequst

        localStorage.setItem('token', data.token)
        localStorage.setItem('refreshToken', data.refreshToken)

        return this.instance({
          ...error.config,
          retry: true
        })
      }
    )
  }
}
