import { combineReducers } from 'redux'
import city from 'state/reducers/city'
import filter from 'state/reducers/filter'

export default combineReducers({
  city,
  filter
})
