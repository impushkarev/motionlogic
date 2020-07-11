import React from 'react'
import { connect } from 'react-redux'
import { changeSearch } from 'state/actions/filter'
import { Toolbar, Typography, Input } from '@material-ui/core'


interface Props {
  changeSearch(search: string): void
}

const TableToolbar:React.FC<Props> = ({ changeSearch }) => {
  const changeHandler = (value: string) => {
    changeSearch(value)
  }

  return (
    <Toolbar>
      <Typography style={{flexGrow: 1}} variant="h6" id="tableTitle" component="div">
        Список задач
      </Typography>
      <Input defaultValue="" onChange={(e) => changeHandler(e.target.value)} placeholder="Найти" />
    </Toolbar>
  )
}

const mapStateToProps = (state: any) => ({
})
const mapDispatchToProps = (dispatch: any) => ({
  changeSearch: (search: string) => dispatch(changeSearch(search)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableToolbar)