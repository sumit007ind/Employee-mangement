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
  const authdata =  useContext(AuthContext)
  

  
  const handleLogin= (email,password)=>{
  if(email == 'admin@me.com' && password == '123'){
   setUser( {role:'admin'})
   
  }
  else if(authdata){
    const empolyee=authdata.employees.find((e)=> email ==e.email && e.password== password)
    if(employee){
  setUser({role:empolyee})

    }
  

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
