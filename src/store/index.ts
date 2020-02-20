import React from 'react'
import RootStore from 'store/RootStore'

const rootStore = new RootStore()

export const fullStoreContext = React.createContext(rootStore)
export const signInContext = React.createContext(rootStore.signIn)

export const useStores = () => React.useContext(fullStoreContext)

export const useSignIn = () => React.useContext(signInContext)
