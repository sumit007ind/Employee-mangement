import React,{useEffect} from 'react'
import Login from './Components/Auth/Login'
import Employeedashboard from './Components/Auth/Dashboard/Employeedashboard'
import Admindashboard from './Components/Auth/Dashboard/Admindashboard'
import { setLocalStorage } from './utils/LocalStorage'

const App = () => {
  useEffect(() => {
     setLocalStorage()
  
  
  
  }, )
  
  return (
 <>
    <Login />
 {/* <Employeedashboard/> */}
 {/* <Admindashboard/> */}
 </>
  )
}

export default App
