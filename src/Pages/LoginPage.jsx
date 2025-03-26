import React from 'react'
import Login from '../Components/Login/Login'
import Header from '../Components/Header'

const LoginPage = ({page}) => {
  return (
    <div>
        <Header/>
        <Login page={page}/>
    </div>
  )
}

export default LoginPage