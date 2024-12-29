import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`,
      {
        headers:
        {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        console.log(res)
        if (res.status === 200) {
          localStorage.removeItem('token')
          navigate('/captain-login')
          return null
        }
      })
  }, [])


  return (
    <>
      CaptainLogout
    </>
  )
}

export default CaptainLogout