import React, { useState } from 'react'
import languages from './languagesList'

const Form = () => {
  const [repoName, setRepoName] = useState('')

  const handleChange = (e) => {
    setRepoName([e.target.name] = e.target.value)
  }
  
  const generateOptions = () => {
    return (
      <select>
        <option value='' disabled>Select language</option>
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
    <div className='Form'>
      <input 
        type='text'
        name='repoName'
        placeholder='Enter the repository name...'
        autoComplete='off'
        value={repoName}
        onChange={(e) => handleChange(e)}
      />
      {generateOptions()}
    </div>
  )
}

export default Form