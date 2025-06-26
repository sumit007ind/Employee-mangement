import React from 'react'
import Header from '../../Otherrs/Header'
import TaskListNumber from '../../Otherrs/TaskListNumber'
import Tasklist from '../../TaskList/Tasklist'

const Employeedashboard = () => {
  return (
    <div className='p-15 bg-[#1C1C1C] h-screen'>
      <Header/>
      <TaskListNumber/>
      <Tasklist/>
    </div>
  )
}

export default Employeedashboard
