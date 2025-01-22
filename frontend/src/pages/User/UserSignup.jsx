import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../../context/UserContext'

const UserSignup = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [user, setUser] = useState({})

  const { user, setUser } = useContext(UserDataContext)

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname:
      {
        firstname,
        lastname,
      },
      email,
      password
    }
    // console.log(`${import.meta.env.VITE_BASE_URL}/user/register`)
    const responce = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser)

    // console.log(responce)
    if (responce.status === 201) {
      const data = responce.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    } else if (responce.status === 404) {
      console.error('Error')
    }

    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className=' md:justify-center md:gap-24 md:items-center flex flex-col justify-between min-h-screen px-4 py-5 '>

      <div className="w-full md:w-1/2 flex flex-col gap-2">
        {/* uber-logo */}
        <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="uber logo"
          className='w-16 mb-2 '
        />

        {/* user form */}
        <form onSubmit={submitHandler}>

          <h3 className='text-base font-medium'>What's your name?</h3>
          <div className="flex gap-3">
            <input
              type="text"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className='bg-gray-100 mt-1 px-3 py-2 rounded grow outline-none text-base placeholder:text-sm w-full'
              placeholder='Jon' />

            <input
              type="text"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className='bg-gray-100 mt-1 px-3 py-2 rounded grow outline-none text-base placeholder:text-sm w-full'
              placeholder='Doe' />

          </div>


          <h3 className='text-base font-medium mt-4'>What's your email?</h3>
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
            Sign Up
          </button>

        </form>

        {/* login account link */}
        <p
          className='text-center'>
          Already have an account?
          <Link
            to='/login'
            className='text-blue-500 font-medium ml-2'>
            Login here
          </Link>
        </p>



      </div>

      <p className='text-xs leading-tight'>By proceeding, you consent to get call, WhatsApp or SMS messages, including by automated means, from Uber and its affiliated to the numer provided. </p>
    </div>
  )
}

export default UserSignup