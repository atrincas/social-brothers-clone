import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider as StoreProvider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import rootReducer from './store'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
