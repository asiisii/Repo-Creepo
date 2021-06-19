import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Search from '../Search/Search'
import { useSelector } from 'react-redux';
import DetailsPage from '../DetailsPage/DetailsPage'

const App = () => {
  // const repoData = useSelector(store => store.repoData)
  // console.log(repoData)
  return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Search} />
          <Route 
          path='/detailsPage/:id' 
          render={({match}) => {
            return (
              <DetailsPage 
                id={match.params.id}
                // repoData={repoData}
              />  

            )
          }}
          />
        </Switch>
      </div>
  )
}

export default App
