import Api from 'api'

export default class Authorization {
  request: Api

  constructor(request: Api) {
    this.request = request
  }
}
