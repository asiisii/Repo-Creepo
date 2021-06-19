import repoReducer from "./repoReducer"
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  repoData: repoReducer
})

export default allReducers