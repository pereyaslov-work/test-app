import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export interface IQueryParams {
  [key: string]: string
}

export const createQueryParamsString = (params: IQueryParams): string =>
  queryString.stringify(params)

export const addOrSetParamsToUrl = (search: string, params: IQueryParams): string =>
  queryString.stringify({
    ...queryString.parse(search),
    ...params
  })

export const useQueryParameter = (name: string): string | string[] | null => {
  const value = queryString.parse(useLocation().search)[name]

  if (value) return value
  else return null
}
