import React from 'react'
import './RepoCard.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const RepoCard = () => {
  const repoData = useSelector(store => store.repoData)

  console.log(`in repocard`)
  // console.log(lang, repoName, repoData)
  // const generateCards = () => {
    const cardData = repoData.map(repoData => {
      return (
        <article 
        className='card' 
        // onClick={(e) => getRepoID(e)}
        >
          <h2><span>Repo Name:</span> {repoData.repositoryName}</h2>
          <h2><span>#'s of stars:</span> {repoData.star}</h2>
          <h2><span>Language:</span> {repoData.language}</h2>
          <h2><span>Owner:</span> {repoData.username}</h2>
          {/* <h2>{repoData.viewRepo}</h2> */}
          <Link to={`/detailsPage/${repoData.id}`}>
            <button className='view'>
             👁 Me
            </button>
          </Link>
        </article>
    )
    })
    
    const getRepoID = e => {
      const Id = e.target.id
      console.log(Id)
    }

  return (
    <section className='cards-flex'>
      {cardData}
    </section>
  )
}


export default RepoCard