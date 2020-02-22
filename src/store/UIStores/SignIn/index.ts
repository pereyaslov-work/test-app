import { computed, action } from 'mobx'
import RootStore from 'store/RootStore'
import InputField from '../InputField'

const passwordRegExp = /^(?=.*\d).{8,}$/
const emailRegExp = /^\S+@\S+\.\S+$/

export default class SignIn {
  email = new InputField('', this.validateEmail)
  password = new InputField('', this.validatePassword)

  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
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
  signIn() {
    if (!this.valid) {
      this.email.validateInput()
      this.password.validateInput()
    }
  }
}
