import React, { useState } from 'react'


const Form = () => {
  const [repoName, setRepoName] = useState('')

  const handleChange = (e) => {
    setRepoName([e.target.name] = e.target.value)
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
    </div>
  )
}

export default Form