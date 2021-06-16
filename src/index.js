import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

const title = 'Anti-Chess!'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App title={title}/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
