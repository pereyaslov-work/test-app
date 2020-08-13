import React from 'react'
import RootStore from 'stores/RootStore'

const rootStore = new RootStore()

export const fullStoreContext = React.createContext(rootStore)

export const useStores = () => React.useContext(fullStoreContext)
