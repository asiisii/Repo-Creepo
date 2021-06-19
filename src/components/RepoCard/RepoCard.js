import React from 'react'
import './RepoCard.css'
const RepoCard = ({repoApiData}) => {
  console.log(`in repocard`)
  // console.log(lang, repoName, repoApiData)
  // const generateCards = () => {
    const cardData = repoApiData.map(repoData => {
      return (
        <div 
        className='card' 
        id={repoData.id}
        onClick={(e) => getRepoID(e)}
        >
          <h2>{repoData.repositoryName}</h2>
          <h2>{repoData.star}</h2>
          <h2>{repoData.language}</h2>
          <h2>{repoData.username}</h2>
          {/* <h2>{repoData.viewRepo}</h2> */}
        </div>
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