import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Search from '../Search/Search'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Search} />
      </Switch>
    </div>
  )
}

export default App
