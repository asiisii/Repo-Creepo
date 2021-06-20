import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './RepoCard.css'

const RepoCard = () => {
  
  const repoData = useSelector(store => store.repoData)

  const cardData = repoData.map(repoData => {
    return (
      <article className='card' key={repoData.id} >
        <h2><span>Repo Name:</span> {repoData.repositoryName}</h2>
        <h2><span>#'s of stars:</span> {repoData.star}</h2>
        <h2><span>Language:</span> {repoData.language}</h2>
        <h2><span>Owner:</span> {repoData.username}</h2>
        
        <Link to={`/detailsPage/${repoData.id}`}>
          <button className='view'>
            👁 Me
          </button>
        </Link>
      </article>
    )
  })
    
  return (
    <section className='cards-flex'>
      {cardData}
    </section>
  )
}

export default RepoCard