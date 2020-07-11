import { TFilter } from 'types/task'

type action = {
  type: string,
  field: string,
  search: string,
}

const filter = (state: TFilter = {field: 'date', search: '', isAsc: true}, action: action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...state, field: action.field, isAsc: true }
    case 'CHANGE_DIRECTION':
      return { ...state, isAsc: !state.isAsc }
    case 'CHANGE_SEARCH':
      return { ...state, search: action.search }
    default:
      return state
  }
}

export default filter