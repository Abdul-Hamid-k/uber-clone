import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ConfirmRide = ({ setConfirmRidePanelOpen, selectedVehicle, confirmRidePanelOpen, setLookingForDriverPanelOpen }) => {
  const confirmRideRef = useRef(null)

  useGSAP(() => {
    if (confirmRidePanelOpen) {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(confirmRideRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePanelOpen])

  return (
    <>
      {/* Confirm Ride panel */}
      <div
        ref={confirmRideRef}
        className="fixed left-0 bottom-0 w-full rounded-t-2xl px-3 py-6 bg-white z-10 translate-y-full">
        {/* close arrow */}
        <h5
          className='w-[100%] text-center mx-auto left-0 top-0 absolute'
          onClick={() => setConfirmRidePanelOpen(false)}>
          <i className="ri-arrow-down-wide-line cursor-pointer"></i>
        </h5>
        {/* heading */}
        <h5 className='font-medium text-xl text-center'>Confirm Ride</h5>

        {/* selected vehicle icon */}
        {selectedVehicle === 'motorcycle' && <img
          className='w-[50%] max-w-[16rem] mx-auto py-[2rem] sm:w-[8rem]'
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="motorcycle" />}

        {selectedVehicle === 'car' && <img
          className='w-[50%] max-w-[16rem] mx-auto py-[2rem] sm:w-[8rem]'
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png"
          alt="car" />}

        {selectedVehicle === 'auto' && <img
          className='w-[50%] max-w-[16rem] mx-auto py-[2rem] sm:w-[8rem]'
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="auto" />}


        {/* ride details */}
        {/* address */}
        {/* Sample User location data */}
        <div className='flex items-center px-2 py-1 my-2 justify-start  gap-3 border-t-[0.1rem] border-gray-200'>
          <i className="ri-map-pin-user-fill text-xl flex justify-center items-center h-9 w-9 rounded-full shrink-0"></i>
          <div className="">
            <h6 className='font-medium'>MP Nagar</h6>
            <p className='text-sm leading-tight'>MP Nagar, Bhopal, Madhya Pradesh 462011</p>
          </div>
        </div>

        {/* address */}
        {/* Sample destiation location data */}
        <div className='flex items-center px-2 py-1 my-2 justify-start  gap-3 border-t-[0.1rem] border-gray-200'>
          <i className="ri-map-pin-2-fill text-xl flex justify-center items-center h-9 w-9 rounded-full shrink-0"></i>

          <div className="">
            <h6 className='font-medium'>MP Nagar</h6>
            <p className='text-sm leading-tight'>MP Nagar, Bhopal, Madhya Pradesh 462011</p>
          </div>
        </div>

        {/* cost */}
        {/* Sample data */}
        <div className='flex items-center px-2 py-1 my-2 justify-start  gap-3 border-t-[0.1rem] border-gray-200'>
          <i className="ri-bank-card-2-fill flex justify-center items-center text-xl h-9 w-9 rounded-full shrink-0"></i>
          <div className="">
            <h6 className='font-medium'>₹192.20</h6>
            <p className='text-sm leading-tight'>Cash</p>
          </div>
        </div >

        <button
          onClick={() => {
            setConfirmRidePanelOpen(false);
            setLookingForDriverPanelOpen(true);
          }}
          className='bg-green-600 w-full px-3 py-2 mt-5 rounded-lg text-white text-lg font-medium'>
          Confirm
        </button>
      </div ></>
  )
}

export default ConfirmRide