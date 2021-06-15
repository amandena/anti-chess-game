import './App.css'
// import '@babel/polyfill'
import './App.css'
import { Provider } from 'react-redux'
// import store from '@redux/store'
import AntiChess from './components/AntiChess'

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
