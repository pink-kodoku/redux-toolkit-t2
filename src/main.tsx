import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@pages/main/App'
import { Provider } from 'react-redux'
import { store } from '@app/store/store'
import './app/styles/index.module.scss'

import { fetchUsers } from '@entities/users/api/users'
import { fetchPosts } from '@entities/post/api/posts'

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
