import React, { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ReceiveRidePopUp = ({ receiveRidePanelOpen, setReceiveRidePanelOpen, setConfirmRidePanelOpen }) => {
  const receiveRideRef = useRef(null)

  useGSAP(() => {
    if (receiveRidePanelOpen) {
      gsap.to(receiveRideRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(receiveRideRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [receiveRidePanelOpen])


  return (
    <>
      {/* New Ride Details */}
      < div
        ref={receiveRideRef}
        className="bg-white p-5 m-2 fixed bottom-0 w-[calc(100vw-1rem)] rounded-xl translate-y-full"  >

        <h5 className='font-medium text-xl mb-2 text-center'>New Ride Available!</h5>
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

        {/* address */}
        {/* Sample User location data */}
        <div className='flex items-center px-2 py-2 my-2 justify-start  gap-3 border-t-[0.1rem] border-gray-200'>
          <i className="ri-map-pin-user-fill text-xl flex justify-center items-center h-9 w-9 rounded-full shrink-0"></i>
          <div className="">
            <h6 className='font-medium'>MP Nagar</h6>
            <p className='text-sm leading-tight'>MP Nagar, Bhopal, Madhya Pradesh 462011</p>
          </div>
        </div>

        {/* address */}
        {/* Sample destiation location data */}
        <div className='flex items-center px-2 py-2 my-2 justify-start  gap-3 border-y-[0.1rem] border-gray-200'>
          <i className="ri-map-pin-2-fill text-xl flex justify-center items-center h-9 w-9 rounded-full shrink-0"></i>

          <div className="">
            <h6 className='font-medium'>MP Nagar</h6>
            <p className='text-sm leading-tight'>MP Nagar, Bhopal, Madhya Pradesh 462011</p>
          </div>
        </div>

        {/* action button */}
        <div className="flex justify-around mt-5">
          <button
            onClick={() => setReceiveRidePanelOpen(false)}
            className='px-4 py-2 w-[40%] bg-gray-200 text-gray-500 rounded-lg font-medium text-lg'>
            Ignore
          </button>
          <button
            onClick={() => {
              setConfirmRidePanelOpen(true)
            }}
            className='px-4 py-2 w-[40%] bg-yellow-500  rounded-lg font-medium text-lg'>
            Accept
          </button>
        </div>
      </ div>
    </>

  )
}

export default ReceiveRidePopUp