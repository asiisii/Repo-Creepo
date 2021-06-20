import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backbtn from '../../assests/back-button.png'
import './DetailsPage.css'

const  DetailsPage = ({id}) => {

  const repoData = useSelector(store => store.repoData)
  const getCurrentRepo = repoData.find(repo => parseInt(id) === repo.id)
  
  return (
    <React.Fragment>
      <Link to='/'>
        <img src={backbtn} alt='back-button'  className='back-btn'/>
      </Link>
      {repoData.length ? 
        <section className='DetailsPage'>
          <div className='details-section'>
            <article className='user-info'>
              <img 
                src={getCurrentRepo.imgUrl} 
                alt={`${getCurrentRepo.username}'s profile pic`}   
              />
              <h1>@{getCurrentRepo.username}</h1>
            </article>
            <article className='repo-info'>
              <h1><span>Repo name: </span> {getCurrentRepo.repositoryName}</h1>
              <h1><span>Stars: </span> {getCurrentRepo.star}</h1>
              <h1><span>Language: </span> {getCurrentRepo.language}</h1>
              <h1><span>Description: </span> {getCurrentRepo.description}</h1> 
              <h1><span>View GitHub Profile: </span> {getCurrentRepo.github}</h1>
              <h1><span>View Repo: </span> {getCurrentRepo.viewRepo}</h1>
            </article>
          </div>
        </section>
        : <Redirect to='/' />
      }
    </React.Fragment>
  )
}

DetailsPage.propTypes = {
  id: PropTypes.string
}

export default DetailsPage