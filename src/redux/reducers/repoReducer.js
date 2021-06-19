const repoReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_REPO_DETAILS':
      return action.payload.repoData
    default:
      return state
  }
}

export default repoReducer