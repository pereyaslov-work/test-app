import { configure } from 'mobx'
import Api from 'api'
import SignIn from 'store/UIStores/SignIn'

configure({
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  enforceActions: 'observed'
})

export default class RootStore {
  signIn = new SignIn(this)
  api = new Api()

  constructor() {}
}
