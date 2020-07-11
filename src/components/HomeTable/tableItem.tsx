import React, { useState, useRef } from 'react'
import { TTask } from 'types/task'
import { connect } from 'react-redux'
import { updateTask, deleteTask } from 'state/actions/task'
import { TableCell, TableRow, Checkbox, IconButton, Input } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'



interface Props {
  task: TTask,
  updateTask(task: TTask): void,
  deleteTask(id: number): void
} 

const TableItem:React.FC<Props> = ({ task, updateTask, deleteTask }) => {
  const input = useRef<HTMLInputElement>(null)
  const [isEdit, setEdit] = useState(false)

  const changeCheckbox = () => {
    updateTask({ ...task, isCompleted: !task.isCompleted })
  }

  const startEdit = () => {
    setEdit(true)
  }
  const saveEdit = () => {
    if (input && input.current) {
      const val = input.current.value
      updateTask({ ...task, title: val })
    }
    closeEdit()
  }
  const closeEdit = () => {
    setEdit(false)
  }

  const actionsIcon = (
    <>
      <IconButton aria-label="delete" onClick={startEdit}>
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={() => deleteTask(task.id)} >
        <DeleteIcon/>
      </IconButton>
    </>
  )
  const editIcon = (
    <>
      <IconButton aria-label="delete" onClick={saveEdit}>
        <CheckIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={closeEdit}>
        <CloseIcon />
      </IconButton>
    </>
  )
  const actionIcons = () => {
    return !isEdit ? actionsIcon : editIcon
  }

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox checked={task.isCompleted} onClick={changeCheckbox} />
      </TableCell>
      <TableCell padding="none">
        {task.date.toDateString()}
      </TableCell>
      <TableCell>
        {task.user !== null ? task.user.name : ''}
      </TableCell>
      <TableCell>
        {!isEdit ? (
          task.title
        ) : (
          <Input defaultValue={task.title} fullWidth inputRef={input} />
        )}
      </TableCell>
      <TableCell>
        {actionIcons()}
      </TableCell>
    </TableRow>
  )
}

const mapStateToProps = (state: any) => ({
  
})
const mapDispatchToProps = (dispatch: any) => ({
  updateTask: (task: TTask) => dispatch(updateTask(task)),
  deleteTask: (id: number) => dispatch(deleteTask(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableItem)