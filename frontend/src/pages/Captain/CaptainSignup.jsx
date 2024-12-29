import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../../context/CaptainContext'

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [color, setColor] = useState('')
  const [plateNumber, setPlateNumber] = useState('')
  const [capacity, setCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const { captain, setCaptain } = useContext(CaptainDataContext)

  const navigate = useNavigate()


  const submitHandler = (e) => {
    e.preventDefault()
    const captainData = {
      fullname:
      {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        plate: plateNumber,
        capacity,
        vehicleType
      }
    }

    // console.log(captainData)

    axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)
      .then(response => {
        if (response.status === 201) {
          const data = response.data;
          setCaptain(data.captain)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
        }
      }).catch(err => { console.error('Captain Signup Error: ' + err) });


    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
    setColor('')
    setPlateNumber('')
    setCapacity('')
    setVehicleType('')
  }

  return (
    <div className=' md:justify-center md:gap-24 gap-16 md:items-center flex flex-col justify-between min-h-screen px-4 py-5 '>

      <div className="w-full md:w-1/2 flex flex-col gap-2">
        {/* uber-logo */}
        <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="uber logo"
          className='w-16 mb-2 '
        />

        {/* user form */}
        <form onSubmit={submitHandler}>

          {/* captain details */}
          <div className="">
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

          </div>

          {/* vehicle details */}
          <div className="">
            <h3 className='text-lg font-medium mt-8'>Vehicle Details</h3>
            <h3 className='text-base font-medium mt-2'>Color</h3>
            <input
              type="text"
              required
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className='bg-gray-100 mt-1 px-3 py-2 rounded grow outline-none text-base placeholder:text-sm w-full'
              placeholder='Red' />

            <h3 className='text-base font-medium mt-2'>Plate Number</h3>
            <input
              type="text"
              required
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              className='bg-gray-100 mt-1 px-3 py-2 rounded grow outline-none text-base placeholder:text-sm w-full'
              placeholder='XX XX XX-XXXX' />

            <h3 className='text-base font-medium mt-2'>Capacity</h3>
            <input
              type="number"
              required
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              min={1}
              className='bg-gray-100 mt-1 px-3 py-2 rounded grow outline-none text-base placeholder:text-sm w-full'
              placeholder='3' />

            <h3 className='text-base font-medium mt-2'>Type</h3>
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-gray-100 mt-1 px-3 py-2 rounded grow outline-none text-base placeholder:text-sm w-full'
            >
              <option className='' value='' disabled>Seletect Type</option>
              <option className='' value='car'>Car</option>
              <option className='' value='motorcycle'>Motorcycle</option>
              <option className='' value='auto'>Auto</option>
            </select>
          </div>

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
            to='/captain-login'
            className='text-blue-500 font-medium ml-2'>
            Login here
          </Link>
        </p>
      </div>

      <p className='text-xs leading-tight'>By proceeding, you consent to get call, WhatsApp or SMS messages, including by automated means, from Uber and its affiliated to the numer provided. </p>
    </div>
  )
}

export default CaptainSignup