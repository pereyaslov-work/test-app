import { configure } from 'mobx'

configure({
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  enforceActions: 'observed'
})

export default class RootStore {
  constructor() {}
}
