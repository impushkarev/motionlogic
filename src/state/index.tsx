import { combineReducers } from 'redux'
import task from 'state/reducers/task'
import filter from 'state/reducers/filter'

export default combineReducers({
  task,
  filter
})
