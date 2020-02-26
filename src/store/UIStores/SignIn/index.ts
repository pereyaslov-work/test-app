import { computed, action } from 'mobx'
import RootStore from 'store/RootStore'
import Api from 'api'
import InputField from '../InputField'

const passwordRegExp = /^(?=.*\d).{8,}$/
const emailRegExp = /^\S+@\S+\.\S+$/

export default class SignIn {
  email = new InputField('', this.validateEmail)
  password = new InputField('', this.validatePassword)

  rootStore: RootStore
  api: Api

  constructor(rootStore: RootStore, api: Api) {
    this.rootStore = rootStore
    this.api = api
  }

  @computed
  get valid(): boolean {
    return this.email.valid && this.password.valid
  }

  validatePassword(value: string): string | null {
    const noError = passwordRegExp.test(value)

    if (!noError) return 'Invalid value. Password must contain 8 characters of which one is a number'
    else return null
  }

  validateEmail(value: string): string | null {
    const noError = emailRegExp.test(value)

    if (!noError) return 'Invalid email. Email format: xxx@xxx.xxx'
    else return null
  }

  @action
  async signIn() {
    if (!this.valid) {
      this.email.validateInput()
      this.password.validateInput()
    } else {
      const responseData = await this.api.auth.signIn(this.email.value, this.password.value)
    }
  }
}
