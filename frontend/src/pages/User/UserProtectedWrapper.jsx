import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectedWrapper = ({ children }) => {

  const token = localStorage.getItem('token')
  const { user, setUser } = useContext(UserDataContext)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      console.log('login')
      navigate('/login')
    }
    else {
      setIsLoading(true)
      // console.log(`${import.meta.env.VITE_BASE_URL}/user/profile`);

      axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        // console.log(res)
        setUser(res.data.captain)
        setIsLoading(false)
      }).catch(err => {
        console.error('User Profile Error: ', err)
        setIsLoading(false)
        localStorage.removeItem('token')
        navigate('/login')
      })
    }

  }, [token])

  return (
    <>
      {isLoading
        ? <div className="flex h-screen justify-center items-center">Loading ...</div>
        : <> {children} </>
      }
    </>
  )
}

export default UserProtectedWrapper