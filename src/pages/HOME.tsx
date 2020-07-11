import React, { useEffect } from 'react'
import { TTask } from 'types/task'
import { initTask } from 'state/actions/task'
import { connect } from 'react-redux'
import CreateInput from 'components/CreateInput'
import HomeTable from 'components/HomeTable'



interface Props {
  initTask(tasks: TTask[]):void
}

const HOME:React.FC<Props> = ({ initTask }) => {

  useEffect(() => {
    getTasks()
  }, [])
  const getTasks = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(json => json.splice(0, 10))
    
    for (const task of data) {
      const user = await getUser(task.userId)
      delete task.userId
      task.date = new Date(Math.random()*100 + 1900, Math.random() * 12)
      task.isCompleted = task.completed
      task.user = user
      delete task.completed

    }

    initTask(data)
  }
  const getUser = async (task: number) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${task}`)
    .then(res => res.json())
    .then(json => {
      delete json.address
      delete json.company
      delete json.email
      delete json.phone
      delete json.website

      return json
    })

    return data
  }

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
  initTask: (tasks: TTask[]) => dispatch(initTask(tasks)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HOME)