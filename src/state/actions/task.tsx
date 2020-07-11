import { TTask } from 'types/task'
import { TUser } from 'types/user'

export const initTask = (tasks: TTask[]) => ({
  type: 'INIT_TASK',
  tasks
})
export const addTask = (taskName: string, user: TUser) => ({
  type: 'ADD_TASK',
  taskName,
  user
})
export const deleteTask = (id: number) => ({
  type: 'DELETE_TASK',
  id
})
export const updateTask = (task: TTask) => ({
  type: 'UPDATE_TASK',
  task
})
export const sortTask = (filter: string) => ({
  type: 'SORT_TASK',
  filter
})