import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRepoData, checkForError } from '../../apiData/apiCalls'
import languages from './languagesList'
import RepoCard from '../RepoCard/RepoCard'
import storeRepoDetails from '../../redux/action'
import cleanUpApiData from '../../apiData/cleanUpApiData'
import Pagination from '../Pagination/Pagination'
import './Form.css'

const Form = () => {
  //added different state to hold values 
  const [repoName, setRepoName] = useState('')
  const [lang, setLang] = useState('')
  const [sort, setSort] = useState('')
  const [statusCode, setStatusCode] = useState(200)
  const [fetchedError, setFetchedError] = useState(false)
  const [error, setError] = useState('')
  //imported useDispatch to be able to invoke action
  const dispatch = useDispatch()
  //access repoData that's getting stored in the Redux
  const repoData = useSelector(store => store.repoData)
  //constrolled form for repoName, lang, and sort state
  const handleRepoNameChange = e => setRepoName(e.target.value)

  const handleLangaugeOptionChange = e => setLang(e.target.value)

  const handleSortOptionChange = e => setSort(e.target.value)
  //fetches the repository data after submit button is clicked 
  const handleSubmit = e => {
    e.preventDefault()
    setError('')
    if (repoName && lang && sort) {
      setFetchedError(false)
      fetchRepoData(repoName, lang, sort, 1)
        .then(response => {
          setStatusCode(response.status)
          return response.json()
        })
        .then(data => {
          const repoDetails = cleanUpApiData(data.items)
          !repoDetails.length ?
          setError(`Sorry we couldn't find the repository you're looking for`) :
          dispatch(storeRepoDetails(repoDetails)) 
        })
        .catch(() => setFetchedError(true))
    } else setError(`Please fill out all the form`)
  }
  //will generate select tags with language options using the languages data thats in languagelist file
  const generateLangaugeOptions = () => {
    return (
      <select className='options' defaultValue='' 
      onChange={(e) => handleLangaugeOptionChange(e)}
      >
        <option  value='' disabled>Select language</option>
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
  //generate select tags with yes or no option for sorting 
  const generateSortOptions = () => {
    return (
      <select 
      className='options' defaultValue='' 
      onChange={(e) => handleSortOptionChange(e)}
      >
        <option value='' disabled>Sort by Stars?</option>
        <option value='&sort=stars'>Yes</option>
        <option value='/'>No</option>
      </select>
    )
  }

  return (
    <section className='repo-cards'>
      <form className='form' onSubmit={(e) => handleSubmit(e)} >
        <input 
          required
          type='text'
          name='repoName'
          placeholder='Ex:Repo-Creepo'
          autoComplete='off'
          value={repoName}
          onChange={(e) => handleRepoNameChange(e)}
        />
        {generateLangaugeOptions()}
        {generateSortOptions()}
        <button 
          className='search-btn' 
          type='submit' 
          value="Submit" 
        >Submit 
        </button>
      </form>
      {/* Pagination component will only gets displayed when theres some kind of repo data */}
      {repoData.length ? 
      <Pagination 
        repoName={repoName} 
        lang={lang}
        sort={sort}
        setStatusCode={setStatusCode}
        setFetchedError={setFetchedError}
      /> : null}
      {!fetchedError && 
      !error && !repoData.length && 
      <h1 className='search-msg'>Please start by searching a repository</h1>
      }
      {error && <h1 className='option-err'> {error} </h1>}
      {fetchedError && checkForError(statusCode)}
      {/* RepoCard will only render after fetching the data sucessfully
      if not then it will let user know they still need to search */}
      {(!fetchedError && 
      !error && repoData.length) ?
        <RepoCard /> : null
      }
    </section>
  )
}

export default Form