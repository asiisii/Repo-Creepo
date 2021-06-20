import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Pagination = () => {
  const dispatch = useDispatch()
  const repoData = useSelector(store => store.repoData)
  const [pageNum, setPageNum] = useState(1)

  // if pageNum is 1 then Previous button is disabled 
  // if repoData.length < 30 then make the Next button disabled
  const updateRepoData = () => {

  }
  

  return (
    <React.Fragment>
      <button className='previous'>Previous Page</button>
      <button className='next'>Next Page</button>
    </React.Fragment>
    
  )
}

export default Pagination