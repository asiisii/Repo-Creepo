import React from 'react'
import Form from '../Form/Form'
import './SearchPage.css'

const SearchPage = () => {
  //this component is responsible for displaying content in the search page
  return (
    <div className='SearchPage'>
      <header>
        <h1 className='app-name'>RepoCr👀po</h1>
      </header>
      <Form />
    </div>
  )
}

export default SearchPage