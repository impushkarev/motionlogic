export const changeFilter = (field: string) => ({
  type: 'CHANGE_FILTER',
  field
})
export const changeSearch = (search: string) => ({
  type: 'CHANGE_SEARCH',
  search
})
export const changeDirection = () => ({
  type: 'CHANGE_DIRECTION'
})
