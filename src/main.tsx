import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/main/App'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import './app/styles/index.module.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
