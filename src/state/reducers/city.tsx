import { TCity } from 'types/city'

type action = {
  type: string,
  id: number,
  cityName: string,
  city: TCity,
  cities: TCity[],
  filter: string,
}

const city = (state: TCity[] = [], action: action) => {
  switch (action.type) {
    case 'INIT_CITIES':
      return action.cities
    case 'ADD_CITY':
      return [ action.city, ...state ]
    case 'DELETE_CITY':
      return state.filter((city:TCity) => city.id !== action.id)
    case 'SORT_TASK':
      return state
    default:
      return state
  }
}

export default city