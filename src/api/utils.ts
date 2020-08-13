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
