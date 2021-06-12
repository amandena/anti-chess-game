import './App.css'
import '@babel/polyfill'
import '@styles/css/main.css'
import { Provider } from 'react-redux'
import store from '@redux/store'
import AntiChess from '@pages/AntiChess.jsx'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AntiChess />
      </Provider>
    </>
  )
}

export default App
