import React, { useRef, useState } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = ({ confirmRidePanelOpen, setConfirmRidePanelOpen
}) => {
  const [otp, setOtp] = useState('')
  const setConfirmRideRef = useRef(null)
  const navigate = useNavigate()

  useGSAP(() => {
    if (confirmRidePanelOpen) {
      gsap.to(setConfirmRideRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(setConfirmRideRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePanelOpen])

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      {/* New Ride Details */}
      < div
        ref={setConfirmRideRef}
        className="bg-white p-5 fixed h-screen bottom-0 w-full rounded-xl translate-y-full"  >

        {/* heading */}
        <div className="border-b-2 pb-3">
          <i className="fixed text-xl ri-arrow-left-line" onClick={() => setConfirmRidePanelOpen(false)}></i>
          <h5 className='font-medium text-xl  text-center'>#123456</h5>
        </div>

        {/* User details */}
        <div className="flex justify-between py-2">
          <div className="flex gap-2">
            <img
              className="w-[3.5rem] h-[3.5rem] object-cover rounded-full"
              src="https://images.unsplash.com/photo-1560727749-cc261b23794c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww" alt="user-img" />
            <div className="">
              <h4 className='font-medium text-xl'> Vanisa </h4>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <h6 className='font-medium text-lg'>₹192.20</h6>
            <h6 className='font-medium text-base text-gray-500'>2.2KM</h6>
          </div>
        </div>

        {/* addresses, and note */}
        <>
          {/* address */}
          {/* Sample User location data */}
          <div className='flex items-center px-2 py-2 mb-2 my-4 justify-start  gap-3 border-t-[0.1rem] border-gray-200'>
            <i className="ri-map-pin-user-fill text-xl flex justify-center items-center h-9 w-9 rounded-full shrink-0"></i>
            <div className="">
              <h6 className='font-medium'>MP Nagar</h6>
              <p className='text-sm leading-tight'>MP Nagar, Bhopal, Madhya Pradesh 462011</p>
            </div>
          </div>

          {/* address */}
          {/* Sample destiation location data */}
          <div className='flex items-center px-2 py-2 my-2 justify-start  gap-3 border-t-[0.1rem] border-gray-200'>
            <i className="ri-map-pin-2-fill text-xl flex justify-center items-center h-9 w-9 rounded-full shrink-0"></i>

            <div className="">
              <h6 className='font-medium'>MP Nagar</h6>
              <p className='text-sm leading-tight'>MP Nagar, Bhopal, Madhya Pradesh 462011</p>
            </div>
          </div>

          {/* Sample note data */}
          <div className='flex items-center px-2 py-2 my-2 justify-start  gap-3 border-t-[0.1rem] border-gray-200'>
            <i className="ri-booklet-line text-xl flex justify-center items-center h-9 w-9 rounded-full shrink-0"></i>


            <div className="">
              <p className='text-sm leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ratione laborum hic qui, ex esse dolores repudiandae cum accusamus excepturi!</p>
            </div>
          </div>
        </>

        {/* Trip fare */}
        {/* Sample trip fare data */}
        <div className='flex items-center px-2 py-2 my-2 justify-start  gap-3 border-t-[0.1rem] border-gray-200'>

          <div className="w-full">
            <h6 className='font-medium text-sm text-gray-500'>Trip Fare</h6>
            <div className="text-sm">
              <div className="flex justify-between w-full">
                <p>Apply Amount</p>
                <p>₹200</p>
              </div>

              <div className="flex justify-between w-full">
                <p>Discount</p>
                <p>₹7.80</p>
              </div>

              <div className="flex justify-between w-full">
                <p>Paid Amount</p>
                <p>₹192.20</p>
              </div>
            </div>
          </div>
        </div>

        {/* action button */}
        <div className="mt-5">
          <form className='w-full' onSubmit={(e) => submitHandler(e)}>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="number" name="otp" min={0} max={999999}
              className='bg-gray-200 px-5 font-mono font-medium text-lg py-3 w-full rounded-md outline-none'
              placeholder='OTP' />

            <button
              onClick={() => {
                navigate('/captain-riding')
              }}
              className='px-4 py-2 w-full mt-3 bg-green-600 text-white rounded-lg font-medium text-lg'>
              Confirm
            </button>
            <button
              onClick={() => {
                setConfirmRidePanelOpen(false)
              }}
              className='mt-2 px-4 py-2 w-full bg-red-600 text-white rounded-lg font-medium text-lg'>
              Cancel
            </button>
          </form>

        </div>
      </ div>
    </>

  )
}

export default ConfirmRidePopUp