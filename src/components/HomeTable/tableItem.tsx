import React from 'react'
import { TCity } from 'types/city'
import { connect } from 'react-redux'
import { deleteCity } from 'state/actions/city'
import { TableCell, TableRow, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'



interface Props {
  city: TCity,
  deleteCity(id: number): void
} 

const TableItem:React.FC<Props> = ({ city, deleteCity }) => {

  console.log(city)
  return (
    <TableRow>
      <TableCell>
        {city.city}
      </TableCell>
      <TableCell>
        {city.region}
      </TableCell>
      <TableCell>
        <IconButton aria-label="delete" onClick={() => deleteCity(city.id)} >
          <DeleteIcon/>
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

const mapStateToProps = (state: any) => ({
  
})
const mapDispatchToProps = (dispatch: any) => ({
  deleteCity: (id: number) => dispatch(deleteCity(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableItem)