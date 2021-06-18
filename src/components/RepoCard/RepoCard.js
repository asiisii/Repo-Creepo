import React from 'react'

const RepoCard = ({lang, repoName, repoApiData}) => {
  console.log(`in repocard`)
  console.log(lang, repoName, repoApiData)
  const generateCards = () => {
    return repoApiData.map(repoData => {
      return (

        <>
        {/* <h1>{repoName}</h1> */}
        <h2>{repoData.repositoryName}</h2>
        <h2>{repoData.star}</h2>
        <h2>{repoData.language}</h2>
        <h2>{repoData.username}</h2>
        {/* <h2>{repoData.viewRepo}</h2> */}
        <p>{repoData.id}</p>
   </>
    )
    })
  }
  return (
    generateCards()
  )
}


export default RepoCard