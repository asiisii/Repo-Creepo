import repoReducer from "./repoReducer"
import { combineReducers } from 'redux'

//allReducers is making the repoReducer an obj data type so its easier to assign
// and access it from the data
const allReducers = combineReducers({
  repoData: repoReducer
})

export default allReducers