import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DashBoard from './dashBoard/DashBoard'
import Login from './login/Login'
import Signup from './signup/Signup'
import { AuthContextProvider } from './auth/AuthContext'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/signUp' component={Signup}></Route>
            <Route path='/chatMates' component={DashBoard}></Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </>
  )
}

export default App
