import React, { useEffect,useContext, useState} from 'react'
import Login from './Components/Auth/Login'
import Employeedashboard from './Components/Auth/Dashboard/Employeedashboard'
import Admindashboard from './Components/Auth/Dashboard/Admindashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  useEffect(() => {
     setLocalStorage()
    getLocalStorage()
  }, )
  const [User, setUser] = useState(null)
  const handleLogin= (email,password)=>{
  if(email == 'admin@me.com' && password == '123'){
   setUser('admin')
   
  }
  else if(email == 'User@me.com' && password == '123'){
    setUser('employee')
    

  }
     else{
    alert("invalid credentials")
  }}

const data =  useContext(AuthContext)
console.log(data)
  
  return (
 <>
    {!User ? <Login handleLogin={handleLogin}  /> : ''}
    { User =='admin' ? <Admindashboard/> : <Employeedashboard/>}
 {/* <Employeedashboard/> */}
 {/* <Admindashboard/> */}
 </>
  )
}

export default App
