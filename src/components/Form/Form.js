import React, { useState } from 'react'
import languages from './languagesList'
import RepoCard from '../RepoCard/RepoCard'
import { fetchRepoData, checkForError } from '../../apiData/apiCalls'

const Form = () => {
  const [repoName, setRepoName] = useState('')
  const [lang, setLang] = useState('')
  const [statusCode, setStatusCode] = useState(200)
  const [fetchedError, setFetchedError] = useState(false)
  const [repoApiData, setRepoApidata] = useState([])

  const handleRepoNameChange = e => setRepoName(e.target.value)

  const handleOptionChange = e => setLang(e.target.value)

  const handleSubmit = e => {
    console.log(`submit`);
    e.preventDefault()
    console.log(repoName, lang);
    if (repoName && lang) {
      setFetchedError(false)
      fetchRepoData(repoName, lang)
        .then(response => {
          setStatusCode(response.status)
          return response.json()
        })
        .then(data => {
          console.log(data.items)
        })
        .catch(() => setFetchedError(true))
    }
    // && <RepoCard lang={lang} repoName={repoName} />
  }

  const generateOptions = () => {
    return (
      <select  defaultValue='' onChange={(e) => handleOptionChange(e)}>
        <option  value='' disabled>Select language</option>
        <option value='all' >All</option>
        {languages.map((language, i) => {
          return (
            <option 
              key={i}
              value={language.value}>
              {language.label}
            </option>
          )
        })}
      </select>
    )
  }

  return (
    <form className='div' onSubmit={(e) => handleSubmit(e)} >
      <input 
        type='text'
        name='repoName'
        placeholder='Enter a repository name...'
        autoComplete='off'
        value={repoName}
        onChange={(e) => handleRepoNameChange(e)}
      />
      {generateOptions()}
      <input 
        className='search-btn' 
        type='submit' 
        value="Submit" 
        
      />
    </form>

  )
}

export default Form