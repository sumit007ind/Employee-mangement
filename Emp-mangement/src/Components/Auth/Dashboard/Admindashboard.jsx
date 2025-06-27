import React from 'react'
import Header from '../../Otherrs/Header'
import CreateTask from '../../Otherrs/CreateTask'
import AllTask from '../../Otherrs/AllTask'

const Admindashboard = () => {
  return (
   <div className='h-screen w-full p-10'>
    <Header/>
    <CreateTask/>
    <AllTask/>
   
   </div>
  )
}

export default Admindashboard
