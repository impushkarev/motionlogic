import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { TCity, TFilter } from 'types/city'
import { Table, TableBody, TableHead, Paper, TableContainer } from '@material-ui/core'

import TableToolbar from './tableToolbar'
import TableHeader from './tableHeader'
import TableItem from './tableItem'

interface Props {
  cities: TCity[],
  filter: TFilter
}

const HomeTable:React.FC<Props> = ({ cities, filter }) => {
  const sortItems = (a: any, b: any):number => {
    let res: number = 0
    if (a > b) res = -1
    if (a < b) res = 1
    
    return filter.isAsc ? res : (res * -1)
  }

  const filteredTasks = cities.filter((city) => filter.search !== '' ? city.city.toLowerCase().indexOf(filter.search.toLowerCase()) > -1 : city)
  const sortedTasks = filteredTasks.sort((a: TCity, b: TCity) => {
    switch (filter.field) {
      case 'city':
        return sortItems(a.city, b.city)
      case 'region':
        return sortItems(a.region, b.region)
      default:
        return 0
    }
  })

  useEffect(() => {
    document.title = `MOTIONLOGIC | Найдено ${filteredTasks.length} города(ов)`
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
                name: 'city',
                title: 'Города'
              },
              {
                id: 1,
                name: 'region',
                title: 'Регион'
              },
            ]} />
          </TableHead>
          <TableBody>
            {sortedTasks.map((city:TCity, index) => (
              <TableItem key={index} city={city} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

const mapStateToProps = (state: any) => ({
  cities: state.city,
  filter: state.filter
})

export default connect(
  mapStateToProps
)(HomeTable)