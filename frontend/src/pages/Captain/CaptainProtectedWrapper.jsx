import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../../context/CaptainContext'
import axios from 'axios'

const CaptainProtectedWrapper = ({ children }) => {

  const token = localStorage.getItem('token')
  const { captain, setCaptain, isLoading, setIsLoading } = useContext(CaptainDataContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      console.log('captain-login')
      navigate('/captain-login')
    }
    else {
      setIsLoading(true)
      axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        setCaptain(res.data.captain)
        setIsLoading(false)
      }).catch(err => {
        console.error('Captain Profile Error: ', err)
        setIsLoading(false)
        localStorage.removeItem('token')
        navigate('/captain-login')
      })
    }
  }, [token])



  return (
    <>{children}</>
  )
}

export default CaptainProtectedWrapper