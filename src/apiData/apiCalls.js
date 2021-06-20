const baseUrl = 'https://api.github.com/search/repositories?q='

//fetches all the matched repo data
const fetchRepoData = (repoName, language, sort, pageNum) => {
  return fetch(`${baseUrl}${repoName}+language:${language}${sort}&page=${pageNum}`)
}

//if theres a fetched error then the status code will be sent here and will display the correct error message
const checkForError = status => {
  let errorMsg;
  switch (status) {
    case 404:
      errorMsg = 'Sorry, we couldn\'t find repository you were looking for'
      break
    case 403:
      errorMsg = 'Sorry, you\'ve reached the search limit. Please try again in an hour.'
      break
    case 500:
      errorMsg = 'Internal Server Error. Our whole team are now aware.'
      break
    default:
      errorMsg = 'Oops! Request failed. Please try again.'
  }

  return <h1 className='error-msg'>{errorMsg}</h1>

}

export {
  fetchRepoData, 
  checkForError
}
