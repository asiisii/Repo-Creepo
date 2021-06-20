import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRepoData } from '../../apiData/apiCalls'
import storeRepoDetails from '../../redux/action'
import cleanUpApiData from '../../apiData/cleanUpApiData'
import './Pagination.css'

const Pagination = ({repoName, lang, sort, setStatusCode, setFetchedError}) => {

  let [pageNum, setPageNum] = useState(1)

  const dispatch = useDispatch()
  const repoData = useSelector(store => store.repoData)

    // if repoData.length is 0 then disabled both buttons
  // if pageNum is 1 then Previous button is disabled 
  // if repoData.length < 30 then make the Next button disabled
  const handleNextBtnClick = () => {
    setPageNum(pageNum + 1)
   setFetchedError(false)
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
  }

  const handlePreviousBtnClick = () => {
    setPageNum(pageNum - 1)
   setFetchedError(false)
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
  }
  
console.log(pageNum);
  return (
    <>
    <section className='Pagination'>
      {pageNum > 1 ? 
      <button className='previous'
      onClick={handlePreviousBtnClick}
      > 👈 Previous Page</button> : 
      null}

      <p className='page-num'><span>Page Num: </span> {pageNum}</p>

      {repoData.length === 30 ? 
      <button className='next'
      onClick={handleNextBtnClick}
      >Next Page 👉</button> : 
      null }
    </section>
    
      </>
  )
}

export default Pagination