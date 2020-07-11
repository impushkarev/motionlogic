interface ICity {
  id: number
  region: string,
  city: string
}

interface IFilter {
  field: string,
  search: string,
  isAsc: boolean,
}

export type TCity = ICity
export type TFilter = IFilter