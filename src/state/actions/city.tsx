import { TCity } from 'types/city'

export const initCities = (cities: TCity[]) => ({
  type: 'INIT_CITIES',
  cities
})
export const addCity = (city: TCity) => ({
  type: 'ADD_CITY',
  city,
})
export const deleteCity = (id: number) => ({
  type: 'DELETE_CITY',
  id
})
export const sortCities = (filter: string) => ({
  type: 'SORT_CITIES',
  filter
})
export const saveCities = (cities) => {
  const serializedState = JSON.stringify(cities)
  localStorage.setItem('cities', serializedState)
}