import React, { useRef } from 'react'
import { TUser } from 'types/user'
import { addTask } from 'state/actions/task'
import { connect } from 'react-redux'
import { Input, InputAdornment, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';



interface Props {
  addTask(taskName: string, user: TUser): void
}

const CreateInput:React.FC<Props> = ({addTask}) => {
  const input = useRef<HTMLInputElement>(null)
  const clickHandler = () => {
    if (input && input.current) {
      const val = input.current.value
      if (val !== '')
        addTask(input.current.value, {id: -1, name: 'Пушкарев Максим'})
      input.current.value = ''
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    clickHandler()
  }

  return (
    <form noValidate autoComplete="off" onSubmit={submitHandler} style={{marginBottom: 30}}>
      <Input fullWidth placeholder="Задача" inputRef={input}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={clickHandler}>
              <AddIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </form>
  )
}

const mapStateToProps = (state: any) => ({
})
const mapDispatchToProps = (dispatch: any) => ({
  addTask: (taskName: string, user: TUser) => dispatch(addTask(taskName, user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateInput)