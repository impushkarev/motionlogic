import React from 'react'
import { TFilter } from 'types/task'
import { connect } from 'react-redux'
import { changeFilter, changeDirection } from 'state/actions/filter'
import { TableCell, TableRow, TableSortLabel } from '@material-ui/core'

interface Props {
  headCells: any,
  filter: TFilter,
  changeFilter(field: string): void ,
  changeDirection(): void
} 

const TableHeader:React.FC<Props> = ({ headCells, filter, changeFilter, changeDirection }) => {
  const clickHandler = (field: string) => {
    if (field === filter.field)
      changeDirection()
    else
      changeFilter(field)
  }

  return (
    <TableRow>
      {headCells.map((cell, index) => (
        <TableCell key={index} padding={index === 1 ? 'none' : 'default'}>
          <TableSortLabel active={filter.field === cell.name} direction={filter.isAsc ? 'asc' : 'desc'} onClick={() => clickHandler(cell.name)}>
            {cell.title}
          </TableSortLabel>
        </TableCell>
      ))}
      <TableCell>
        Действия
      </TableCell>
    </TableRow>
  )
}

const mapStateToProps = (state: any) => ({
  filter: state.filter
})
const mapDispatchToProps = (dispatch: any) => ({
  changeFilter: (field: string) => dispatch(changeFilter(field)),
  changeDirection: () => dispatch(changeDirection())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableHeader)