//this function is what gets invoked by the dispatch 
// repoData gets passed down as an argument here
const storeRepoDetails = repoData =>{
  return {
    type: 'STORE_REPO_DETAILS',
    payload: {
      repoData
    }
  }
}

export default storeRepoDetails