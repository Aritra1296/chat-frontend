import React, { createContext, useState, useEffect } from 'react'
import axios from '../axios'
const AuthContext = createContext()

function AuthContextProvider(props) {
  const [loginUserID, setloginUserID] = useState('')
  const [loggedIn, setLoggedIn] = useState(undefined)

  async function getLoggedIn() {
    try {
      const loggedInRes = await axios.get(
        '/users/loggedIn'
      )
      setLoggedIn(loggedInRes.data.loggedIn)
      setloginUserID(loggedInRes.data.user)
    } catch (error) {
      setLoggedIn(false)
    }
  }
  useEffect(() => {
    getLoggedIn()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        loginUserID,
        setloginUserID,
        loggedIn,
        getLoggedIn,
      }}
    >
      {props.children }
    </AuthContext.Provider>
  )
}
export default AuthContext
export { AuthContextProvider }
