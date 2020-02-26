import Api from 'api'
import { signIn } from '../urls'
import { ISignInResponse } from './interfaces'

export default class Authorization {
  request: Api

  constructor(request: Api) {
    this.request = request
  }

  async signIn(email: string, password: string): Promise<ISignInResponse> {
    return (await this.request.post<ISignInResponse>(signIn, { email, password })).data
  }
}

export * from './interfaces'
