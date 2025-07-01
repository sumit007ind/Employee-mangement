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
   setUser('admin')
   console.log (user)
  }
  else if(email == 'User@me.com' && password == '123'){
    setUser('employee')
    console.log(user)

  }
     else{
    alert("invalid credentials")
  }}


  
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
