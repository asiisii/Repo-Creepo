import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DetailsPage from '../DetailsPage/DetailsPage'
import SearchPage from '../SearchPage/SearchPage';

//App component is only responsible for routing the page to its correct path
// if there's any invalid path then it will route them to Page not found page"

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={SearchPage} />
        <Route 
        path='/detailsPage/:id' 
        render={({match}) => {
          return (
            <DetailsPage id={match.params.id} />  
          )
        }}
        />
        <Route render= {() => {
        return <h1>Page Not Found</h1>
      }}
      /> 
      </Switch>
    </div>
  )
}

export default App
