import { configure } from 'mobx'
import SignIn from 'store/UIStores/SignIn'

configure({
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  enforceActions: 'observed'
})

export default class RootStore {
  signIn = new SignIn()

  constructor() {}
}
