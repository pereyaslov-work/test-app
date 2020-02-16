import React from 'react'
import RootStore from 'store/RootStore'

export const fullStoreContext = React.createContext(RootStore)

export const useStores = () => React.useContext(fullStoreContext)
