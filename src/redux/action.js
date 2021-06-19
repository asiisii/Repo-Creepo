const storeRepoDetails = repoData =>{
  return {
    type: 'STORE_REPO_DETAILS',
    payload: {
      repoData
    }
  }
}

export default storeRepoDetails