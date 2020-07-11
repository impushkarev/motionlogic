import { TTask } from 'types/task'
import { TUser } from 'types/user'

type action = {
  type: string,
  id: number,
  taskName: string,
  task: TTask,
  tasks: TTask[],
  filter: string,
  user: TUser
}

let nextId = 0

const task = (state: TTask[] = [], action: action) => {
  switch (action.type) {
    case 'INIT_TASK':
      nextId = action.tasks.length + 1
      return action.tasks
    case 'ADD_TASK':
      nextId = nextId + 1
      const ct:TTask = {
        id: nextId,
        date: new Date(),
        title: action.taskName,
        user: action.user,
        isCompleted: false,
      }
      return [ ct, ...state ]
    case 'DELETE_TASK':
      return state.filter((task:TTask) => task.id !== action.id)
    case 'UPDATE_TASK':
      return state.map((task:TTask) => task.id === action.task.id ? action.task : task)
    case 'SORT_TASK':
      return state
    default:
      return state
  }
}

export default task