import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import backbtn from '../../assests/back-button.png'
import './DetailsPage.css'

const  DetailsPage = ({id}) => {
  const repoData = useSelector(store => store.repoData)
  // console.log(repoData)
  // console.log(id);

  const getCurrentRepo = repoData.find(repo => parseInt(id) === repo.id)
  console.log(getCurrentRepo);
  return (
      <React.Fragment>
        <Link to='/'>
        <img src={backbtn} alt='back-button'  className='back-btn'/>
      </Link>
      {repoData.length ? 
    <section className='DetailsPage'>
      <div className='details-section'>
        <article className='user-info'>
          <img src={getCurrentRepo.imgUrl} />
          <h1>@{getCurrentRepo.username}</h1>
        </article>
        <article className='repo-info'>
          <h1>User github: {getCurrentRepo.github}</h1>
          <h1>Full repository name: {getCurrentRepo.repositoryName}</h1>
          <h1>Stars: {getCurrentRepo.star}</h1>
          <h1>Language: {getCurrentRepo.language}</h1>
          <h1>View Repo: {getCurrentRepo.viewRepo}</h1>
          <h1>Description: {getCurrentRepo.description}</h1> 
          <h1>View Repo: {getCurrentRepo.viewRepo}</h1>
        </article>
      </div>
    </section>
      : <Redirect to='/' />
    }
    </React.Fragment>
  )
}


export default DetailsPage