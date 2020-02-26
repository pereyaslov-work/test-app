import { configure } from 'mobx'
import Api from 'api'
import SignIn from 'store/UIStores/SignIn'

configure({
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  enforceActions: 'observed'
})

export default class RootStore {
  api = new Api()
  signIn = new SignIn(this, this.api)

  constructor() {}
}
