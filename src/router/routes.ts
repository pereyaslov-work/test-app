import { lazy } from 'react'

const Dashboard = lazy(() => import('containers/Dashboard'))

export default [
  { name: 'Dashboard', path: '/main', component: Dashboard, exact: true },
]
