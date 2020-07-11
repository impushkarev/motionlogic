import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TTask, TFilter } from 'types/task'
import { Table, TableBody, TableHead, Paper, TableContainer } from '@material-ui/core'

import TableToolbar from './tableToolbar'
import TableHeader from './tableHeader'
import TableItem from './tableItem'

interface Props {
  tasks: TTask[],
  filter: TFilter
}

const HomeTable:React.FC<Props> = ({ tasks, filter }) => {
  const sortItems = (a: any, b: any):number => {
    let res: number = 0
    if (a > b) res = -1
    if (a < b) res = 1
    
    return filter.isAsc ? res : (res * -1)
  }

  const filteredTasks = tasks.filter((task) => filter.search !== '' ? task.title.toLowerCase().indexOf(filter.search.toLowerCase()) > -1 : task)
  const sortedTasks = filteredTasks.sort((a: TTask, b: TTask) => {
    switch (filter.field) {
      case 'checkbox':
        return sortItems(a.isCompleted, b.isCompleted)
      case 'date':
        return sortItems(a.date, b.date)
      case 'author':
        return sortItems((a.user === null) ? '' : a.user.name, (b.user === null) ? '' : b.user.name)
      case 'task':
        return sortItems(a.title, b.title)
      default:
        return 0
    }
  })

  useEffect(() => {
    document.title = `IDECO | Найдено ${filteredTasks.length} задач(и)`
  }, [filteredTasks.length])

  return (
    // Можно использовать MaterialTable
    <Paper>
      <TableToolbar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableHeader headCells={[
              {
                id: 0,
                name: 'checkbox',
                title: ''
              },
              {
                id: 1,
                name: 'date',
                title: 'Дата'
              },
              {
                id: 2,
                name: 'author',
                title: 'Исполнитель'
              },
              {
                id: 3,
                name: 'task',
                title: 'Задача',
              }
            ]} />
          </TableHead>
          <TableBody>
            {sortedTasks.map((task:TTask, index) => (
              <TableItem key={index} task={task} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

const mapStateToProps = (state: any) => ({
  tasks: state.task,
  filter: state.filter
})

export default connect(
  mapStateToProps
)(HomeTable)