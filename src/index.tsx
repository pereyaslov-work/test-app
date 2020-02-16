import React from 'react'
import ReactDOM from 'react-dom'
import { Router as ReactRouter } from 'react-router-dom'
import { history } from 'router/history'
import App from './App'
import './i18n'

const rootElement = document.getElementById('mount')

ReactDOM.render(
  <ReactRouter history={history}>
    <App />
  </ReactRouter>,
  rootElement
)
