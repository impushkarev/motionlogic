import React, { useEffect } from 'react'
import { TCity } from 'types/city'
import { initCities } from 'state/actions/city'
import { connect } from 'react-redux'
import CreateInput from 'components/CreateInput'
import HomeTable from 'components/HomeTable'



interface Props {
  initCities(cities: TCity[]):void
}

const HOME:React.FC<Props> = ({ initCities }) => {
  return (
    <>
      <CreateInput />
      <HomeTable />
    </>
  )
}

const mapStateToProps = (state: any) => ({

})
const mapDispatchToProps = (dispatch: any) => ({
  initCities: (cities: TCity[]) => dispatch(initCities(cities)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HOME)