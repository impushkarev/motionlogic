import React, { useRef, useState, useEffect } from 'react'
import { TCity } from 'types/city'
import { addCity } from 'state/actions/city'
import { connect } from 'react-redux'
import { Input } from '@material-ui/core'
import './style.scss'


interface Props {
  cities: TCity[]
  addCity(city: TCity): void
}

const CreateInput:React.FC<Props> = ({ cities, addCity }) => {
  const [scities, setScities] = useState([])
  const [searchedItems, setSearchedItems] = useState([])
  const input = useRef<HTMLInputElement>(null)
  
  //ПОЛУЧИТЬ СПИСОК ГОРОДОВ РОССИИ
  useEffect(() => {
    getTasks()
  }, [])
  const getTasks = async () => {
    const data = await fetch('https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia')
    .then(res => res.json())
    .then(res => {
      res.map((item, index) => {
        item.id = index
      })
      return res
    })
    setScities(data)
  }

  //ДОБАВИТЬ ГОРОД В СПИСОК
  const addHandler = (item) => {
    addCity({id: cities.length + 1, ...item})
    if (input.current)
      input.current.value = ''
    changeHandler()
  }
  //ОБНОВИТЬ СПИСОК ПОИСКА
  const submitHandler = (e) => {
    e.preventDefault()
    changeHandler()
  }
  //ПОИСК ПО СПИСКУ
  const changeHandler = () => {
    const si = input.current ? input.current.value.toLowerCase() : ''
    if (si.length >= 3) {
      const search = scities.filter((city: TCity) => city.city.toLowerCase().indexOf(si) !== -1 || city.region.toLowerCase().indexOf(si) !== -1 ? city : null)
      setSearchedItems(search)
    } else {
      setSearchedItems([])
    }
  }

  return (
    <form noValidate autoComplete="off" onSubmit={submitHandler} style={{marginBottom: 30}}>
      <Input fullWidth placeholder="Задача" inputRef={input} onChange={changeHandler} />
      <ul className="help_list">
        {
          searchedItems.map((item: TCity, index) => {
            return (
              <li key={index} onClick={() => addHandler(item)}>{`${item.city}, ${item.region}`}</li>
            )
          })
        }
      </ul>
    </form>
  )
}

const mapStateToProps = (state: any) => ({
  cities: state.city
})
const mapDispatchToProps = (dispatch: any) => ({
  addCity: (city: TCity) => dispatch(addCity(city)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateInput)