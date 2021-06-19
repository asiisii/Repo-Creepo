import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const  DetailsPage = ({id}) => {
  const repoData = useSelector(store => store.repoData)
  // console.log(repoData)
  // console.log(id);

  const getCurrentRepo = repoData.find(repo => parseInt(id) === repo.id)
  console.log(getCurrentRepo);
  return (
    <section className='DetailsPage'>
      <img src={getCurrentRepo.imgUrl} />
      <h1>Username: {getCurrentRepo.username}</h1>
      <h1>User github: {getCurrentRepo.github}</h1>
      <h1>Language: {getCurrentRepo.language}</h1>
      <h1>View Repo: {getCurrentRepo.viewRepo}</h1>
      <h1>Stars: {getCurrentRepo.star}</h1>
      <p>Description: {getCurrentRepo.description}</p>
      <p>Full repository name: {getCurrentRepo.repositoryName}</p>
    </section>
  )
}


export default DetailsPage