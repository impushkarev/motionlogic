import { TUser } from './user'

interface ITask {
  id: number,
  date: Date,
  title: string,
  user: TUser,
  isCompleted: boolean,
}

interface IFilter {
  field: string,
  search: string,
  isAsc: boolean
}

export type TTask = ITask
export type TFilter = IFilter