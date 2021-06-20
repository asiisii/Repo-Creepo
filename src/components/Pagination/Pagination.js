import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Pagination.css'

const Pagination = () => {
  const dispatch = useDispatch()
  const repoData = useSelector(store => store.repoData)
  const [pageNum, setPageNum] = useState(1)

    // if repoData.length is 0 then disabled both buttons
  // if pageNum is 1 then Previous button is disabled 
  // if repoData.length < 30 then make the Next button disabled
  const handleNextBtnClick = () => {
    setPageNum(pageNum++)
  }

  const handlePreviousBtnClick = () => {
    setPageNum(pageNum--)
  }
  

  return (
    <section className='Pagination'>
      {pageNum > 1 ? <button className='previous'> 👈 Previous Page</button> : null}
      <p>Page Num {pageNum}</p>
      {repoData.length === 30 ? <button className='next'>Next Page 👉</button> : null }
    </section>
    
  )
}

export default Pagination