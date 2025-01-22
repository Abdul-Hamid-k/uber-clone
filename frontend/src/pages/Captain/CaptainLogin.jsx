import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserContext'
import axios from 'axios'
import { CaptainDataContext } from '../../context/CaptainContext'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { captain, setCaptain } = useContext(CaptainDataContext)

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    const captainData = { email, password }

    axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captainData)
      .then(response => {
        if (response.status === 200) {
          const data = response.data
          setCaptain(data.captain)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
        }
      }).catch(err => { console.error('Captain Login Error: ' + err) });

    setEmail('')
    setPassword('')
  }

  return (
    <div className=' md:justify-center md:gap-24 md:items-center flex flex-col justify-between h-screen px-4 py-5 '>

      <div className="w-full md:w-1/2 flex flex-col gap-2">
        {/* uber-logo */}
        <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="uber logo"
          className='w-16 mb-2 '
        />

        {/* user form */}
        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium'>What's your email?</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-100 mt-1 px-3 py-2 rounded grow outline-none text-base placeholder:text-sm w-full'
            placeholder='Jon.Doe@example.com' />

          <h3 className='text-base font-medium mt-4'>Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-100 mt-1 px-3 py-2 rounded grow outline-none text-base placeholder:text-sm w-full'
            placeholder='**********' />

          <button
            to='/login'
            className='text-center mt-4 bg-[#111] text-white w-full py-3 font-medium text-xl rounded-md'>
            Login
          </button>
        </form>

        {/* create account link */}
        <p
          className='text-center'>
          Join a fleet?
          <Link
            to='/captain-signup'
            className='text-blue-500 font-medium ml-2'>
            Register as a Captain
          </Link>
        </p>

      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* signin as user */}
        <div className="">
          <Link
            to='/login'
            className='flex justify-center items-center bg-[#d5622d] text-white w-full py-3 font-medium text-xl rounded-md'>
            Sign in as User
          </Link>
        </div>

      </div>
    </div>
  )
}

export default CaptainLogin