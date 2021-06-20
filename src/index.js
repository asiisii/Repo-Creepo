import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import { BrowserRouter as Router } from 'react-router-dom'

import allReducers from './redux/reducers/allReducers'
// to create store we need to import createStore from redux
import { createStore } from 'redux'
// import Provider to connects our Global state called store to entire app
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  // this will allow us to use Redux devetools on the browser
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Router>
   <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)


