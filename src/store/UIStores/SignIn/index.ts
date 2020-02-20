import { computed, action } from 'mobx'
import InputField from '../InputField'

const passwordRegExp = /^(?=.*\d).{8,}$/
const emailRegExp = /^\S+@\S+\.\S+$/

export default class SignIn {
  email = new InputField('', this.validateEmail)
  password = new InputField('', this.validatePassword)

  @computed
  get valid(): boolean {
    return !this.email.error &&
            !!this.email.value &&
            !this.password.error &&
            !!this.password.value
  }

  validatePassword(value: string): string | null {
    const noError = passwordRegExp.test(value)

    if (!noError) return 'Invalid value'
    else return null
  }

  validateEmail(value: string): string | null {
    const noError = emailRegExp.test(value)

    if (!noError) return 'Invalid email'
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
