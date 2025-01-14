import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserContext'
import axios from 'axios'


const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, setUser } = useContext(UserDataContext)

  const navigate = useNavigate()


  const submitHandler = (e) => {
    e.preventDefault()
    const userData = { email, password }
    axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, userData).then(responce => {
      if (responce.status === 200) {
        console.log(responce)
        const data = responce.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
    }).catch(err => console.error('Login Error: ' + err.message));

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
          New Here?
          <Link
            to='/signup'
            className='text-blue-500 font-medium ml-2'>
            Create a new account
          </Link>
        </p>



      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* signin as captain */}
        <div className="">
          <Link
            to='/captain-login'
            className='flex justify-center items-center bg-[#10b461] text-white w-full py-3 font-medium text-xl rounded-md'>
            Sign in as Captain
          </Link>
        </div>

        {/* or seperator */}
        {/* <div className="flex gap-3 items-center">
          <div className="grow  bg-gray-100 h-[0.125rem]"></div>
          <p className='text-gray-500'>or</p>
          <div className="grow bg-gray-100  h-[0.125rem]"></div>
        </div> */}

        {/* Auth */}
        {/* <div className="flex flex-col gap-4"> */}
        {/* Google */}
        {/* <div className="bg-gray-100 flex items-center justify-center gap-4 p-3 rounded-md cursor-pointer">
            <img
              className='w-6'
              src="https://imgs.search.brave.com/V7sgagRATLlWoAL9kKkWlvM1Lymxxb-2sk6dz3LnYrk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0dvb2dsZV8l/MjJHJTIyX2xvZ28u/c3Zn" alt="" />
            <p className='text-lg font-medium'>Continue with Google</p>
          </div> */}

        {/* Apple */}
        {/* <div className="bg-gray-100 flex items-center justify-center gap-4 p-3 rounded-md cursor-pointer">
            <img
              className='w-6 h-6 object-cover object-center'
              src="https://imgs.search.brave.com/NkxlIP-TwtyAhs9Wlhwtm8MDtrZlZH67w3t2nF-8hzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FwcGxlLUxvZ28t/NTAweDI4MS5wbmc" alt="" />
            <p className='text-lg font-medium'>Continue with Apple</p>
          </div> */}

        {/* Facebook */}
        {/* <div className="bg-gray-100 flex items-center justify-center gap-4 p-3 rounded-md cursor-pointer">
            <img
              className='w-6'
              src="https://imgs.search.brave.com/FPk4mSjvN345ntfqKOLMPmg4tiXtvDxOMQaE34jg5B4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L0ZhY2Vib29r/X0ZfaWNvbi5zdmc" alt="" />
            <p className='text-lg font-medium'>Continue with Facebook</p>
          </div> */}
        {/* </div> */}
      </div>
    </div>

  )
}

export default UserLogin