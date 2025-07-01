import React, { useState, createContext } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [UserData, setUserData] = useState([])
    const {employee ,admin}=getLocalStorage()
   
   
     return (
    <div>
     <AuthContext.Provider value={"Sumit"}>
         {children}
     </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
