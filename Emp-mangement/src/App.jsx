import React, {useState} from 'react'
import Login from './Components/Auth/Login'
import Employeedashboard from './Components/Auth/Dashboard/Employeedashboard'
import Admindashboard from './Components/Auth/Dashboard/Admindashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
  // useEffect(() => {
  //   //  setLocalStorage()
  //   getLocalStorage()
  // }, )
  const [User, setUser] = useState(null)
  const handleLogin= (email,password)=>{
  if(email == 'admin@me.com' && password == '123'){
    console.log("this is admin")
  }else if(email == 'User@me.com' && password == '123'){
    console.log("this is user")
  }
     else{
    alert("invalid credentials")
  }}
  handleLogin('admin@me.com',123)

  
  return (
 <>
    {!User ?<login/> : ''}
 {/* <Employeedashboard/> */}
 {/* <Admindashboard/> */}
 </>
  )
}

export default App
