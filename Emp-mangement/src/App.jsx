import React,{useEffect} from 'react'
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
  const handleLogin= ()=>{
    
  }

  
  return (
 <>
    {!user ?<login/> : ''}
 {/* <Employeedashboard/> */}
 {/* <Admindashboard/> */}
 </>
  )
}

export default App
