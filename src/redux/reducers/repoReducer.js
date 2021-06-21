//initial value for the state is assigned to an empty array
//after the dispatch method invokes the action, this repoReducer will check what action it is
//depending on the case it will either update the state value or return an empty array for state
const repoReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_REPO_DETAILS':
      return action.payload.repoData
    default:
      return state
  }
}

export default repoReducer