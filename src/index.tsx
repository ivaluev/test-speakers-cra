import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
// import './index.svg'
import App from './modules/app'
import {configureStore} from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
