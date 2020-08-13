import { observable, action, computed } from 'mobx'

export type Validate = (value: string) => string | null

export default class InputStore {
  @observable value = ''
  @observable error: string | null = null
  @observable changed = false
  @observable blur = false
  validate?: Validate

  constructor(value = '', validate?: Validate) {
    this.value = value
    this.validate = validate
  }

  @action
  setValue(value: string) {
    this.value = value
  }
}
