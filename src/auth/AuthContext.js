import React, { createContext, useState } from 'react'

const AuthContext = createContext()

function AuthContextProvider(props) {
  const [loginUserID, setloginUserID] = useState('')

  return (
    <AuthContext.Provider
      value={{
        loginUserID,
        setloginUserID,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext
export { AuthContextProvider }
