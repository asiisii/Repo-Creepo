import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRepoData } from '../../apiData/apiCalls'
import storeRepoDetails from '../../redux/action'
import cleanUpApiData from '../../apiData/cleanUpApiData'
import PropTypes from 'prop-types';
import './Pagination.css'

const Pagination = ({repoName, lang, sort, setStatusCode, setFetchedError}) => {
  //pageNum will update depending on the button click
  let [pageNum, setPageNum] = useState(1)

  const dispatch = useDispatch()
  const repoData = useSelector(store => store.repoData)

  //this function will INCREASE the pageNum state by 1/click and fetches the data for that pg
  const handleNextBtnClick = () => {
    setPageNum(pageNum + 1)
    setFetchedError(false)
  }
//this function will DECREASE the pageNum state by 1/click and fetches the data for that pg
  const handlePreviousBtnClick = () => {
    setPageNum(pageNum - 1)
    setFetchedError(false)
  }
//everytime there's a change in page number useEffect will get triggered
  useEffect(() => {
    fetchRepoData(repoName, lang, sort, pageNum)
    .then(response => {
     setStatusCode(response.status)
      return response.json()
    })
    .then(data => {
      const repoDetails = cleanUpApiData(data.items)
      dispatch(storeRepoDetails(repoDetails))
    })
    .catch(() =>setFetchedError(true))
  }, [pageNum])

  
  return (
    <section className='Pagination'>
      {/* this button will only get displayed after the user renders 2nd page of the search result */}
      { pageNum > 1 ? 
        <button className='previous'
        onClick={handlePreviousBtnClick}
        > 👈 Previous Page</button> : 
        null 
      }
      <p className='page-num'> <span> Page Num: </span> {pageNum}</p>
      {/* this button will only get displayed if the repodata has 30 data in it
      assuming there are more data to be rendered */}
      { repoData.length === 30 ? 
        <button className='next'
        onClick={handleNextBtnClick}
        >Next Page 👉</button> : 
        null
      }
    </section>
  )
}

Pagination.propTypes = {
  repoName: PropTypes.string,
  lang: PropTypes.string,
  sort: PropTypes.string,
  setStatusCode: PropTypes.func,
  setFetchedError: PropTypes.func,
}


export default Pagination