import React, { useState } from 'react'
import languages from './languagesList'
import RepoCard from '../RepoCard/RepoCard'
import { fetchRepoData, checkForError } from '../../apiData/apiCalls'
import storeRepoDetails from '../../redux/action'
import cleanUpApiData from '../../apiData/cleanUpApiData'
import { useSelector, useDispatch } from 'react-redux'
const Form = () => {
  const [repoName, setRepoName] = useState('')
  const [lang, setLang] = useState('')
  const [sort, setSort] = useState('')
  const [statusCode, setStatusCode] = useState(200)
  const [fetchedError, setFetchedError] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const repoData = useSelector(store => store.repoData)

  const handleRepoNameChange = e => setRepoName(e.target.value)

  const handleLangaugeOptionChange = e => setLang(e.target.value)

  const handleSortOptionChange = e => setSort(e.target.value)

  const handleSubmit = e => {
    console.log(`submit`);
    e.preventDefault()
    setError('')
    console.log(repoName, lang);
    if (repoName && lang && sort) {
      setFetchedError(false)
      fetchRepoData(repoName, lang, sort)
        .then(response => {
          setStatusCode(response.status)
          return response.json()
        })
        .then(data => {
          // setRepoApidata(cleanUpApiData(data.items))
          const repoDetails = cleanUpApiData(data.items)
          dispatch(storeRepoDetails(repoDetails))
        })
        .catch(() => storeRepoDetails(true))
    } else setError(`Please fill out all the form`)
  }


  const generateLangaugeOptions = () => {
    return (
      <select  defaultValue='' onChange={(e) => handleLangaugeOptionChange(e)}>
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

  const generateSortOptions = () => {
    return (
      <select defaultValue='' onChange={(e) => handleSortOptionChange(e)}>
        <option value='' disabled>Sort by Stars?</option>
        <option value='&sort=stars'>Yes</option>
        <option value='/'>No</option>
      </select>
    )
  }

  return (
    <>
    <form className='div' onSubmit={(e) => handleSubmit(e)} >
      <input 
        required
        type='text'
        name='repoName'
        placeholder='Enter a repository name...'
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
       >Search Repo 
      </button>
    </form>
    {error && <h1 className='option-err'>{error}</h1>}
    {fetchedError && checkForError(statusCode)}
    {!fetchedError && 
    !error && 
    repoData.length &&
    <RepoCard 
    repoData={repoData}
    />}
    </>
  )
}

export default Form