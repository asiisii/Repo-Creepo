import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';
import DetailsPage from '../DetailsPage/DetailsPage'
import SearchPage from '../SearchPage/SearchPage';

const App = () => {
  // const repoData = useSelector(store => store.repoData)
  // console.log(repoData)
  return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={SearchPage} />
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
