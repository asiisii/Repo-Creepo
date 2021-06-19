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
          <Link 
          // id={repoData.id}
          to={`/detailsPage/${repoData.id}`}
          // onClick={(e) => getRepoID(e)}
          // component={DetailsPage }
          
           >
             👁
             </Link>
          <h2>{repoData.repositoryName}</h2>
          <h2>{repoData.star}</h2>
          <h2>{repoData.language}</h2>
          <h2>{repoData.username}</h2>
          {/* <h2>{repoData.viewRepo}</h2> */}
        </article>
    )
    })
    
    const getRepoID = e => {
      const Id = e.target.id
      console.log(Id)
    }

  return (
    <section className='cards-grids'>
      {cardData}
    </section>
  )
}


export default RepoCard