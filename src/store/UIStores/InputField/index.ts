import { observable, action } from 'mobx'
import { ValidateCallback } from './interfaces'

export default class InputField {
  @observable value = ''
  @observable error: string | null = null
  @observable changed = false
  @observable blur = false
  validate?: ValidateCallback

  constructor(defaultValue: string = '', validate?: ValidateCallback) {
    this.value = defaultValue
    this.validate = validate
  }

  @action
  onChange(newValue: string) {
    if (!newValue) this.changed = false
    else this.changed = true

    this.value = newValue

    if (this.changed && this.blur) this.validateInput()
  }

  @action
  onBlur() {
    this.blur = true

    if (this.changed && this.blur) this.validateInput()
  }

  @action
  onFocus() {
    if (!this.value && !this.error) this.blur = false
  }

  @action
  validateInput() {
    if (this.validate) {
      this.error = this.validate(this.value)
      this.changed = true
      this.blur = true
    }
  }
}
