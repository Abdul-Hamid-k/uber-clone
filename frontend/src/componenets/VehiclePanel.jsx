import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const VehiclePanel = ({ vehiclePanelOpen, setVehiclePanelOpen, setConfirmRidePanelOpen, setSelectedVehicle }) => {
  const vehiclePanelRef = useRef(null)

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanelOpen])

  return (
    // {/* Vehicles */ }
    < div
      ref={vehiclePanelRef}
      className={`fixed left-0 bottom-0 w-full rounded-t-2xl px-3 py-6 bg-white  translate-y-full`
      }>
      {/* heading */}
      < h5
        className='w-[100%] text-center mx-auto left-0 top-0 absolute'
        onClick={() => setVehiclePanelOpen(false)}>
        {vehiclePanelOpen &&
          <i className="ri-arrow-down-wide-line"></i>
        }
      </h5 >
      <p className='font-semibold text-xl flex justify-between'>
        Choose a Vehicle
      </p>
      {/* Uber car */}
      <div onClick={() => {
        setSelectedVehicle('car')
        setVehiclePanelOpen(false)
        setConfirmRidePanelOpen(true)
      }}
        className="flex w-full gap-2 sm:gap-4 my-4 items-center px-3 py-2 border-2 rounded-xl border-gray-200 active:border-black ">
        <img
          className='w-[20%] max-w-[8rem] sm:w-[8rem]'
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png"
          alt="car" />

        <div className="leading-tight grow w-1/2 self-start">
          <h3 className='font-semibold text-lg flex items-center'>UberGo <span className='text-base ml-2'><i className="ri-user-fill"></i>4</span></h3>
          <p className='font-medium text-sm sm:text-base'>2 min away </p>
          <p className='text-xs sm:text-sm'>Affordable, compact ride</p>
        </div>

        <h3 className='font-semibold text-lg self-start'>₹199.20</h3>
      </div >

      {/* Uber bike */}
      <div onClick={() => {
        setSelectedVehicle('motorcycle')
        setVehiclePanelOpen(false)
        setConfirmRidePanelOpen(true)
      }}
        className="flex w-full gap-2 sm:gap-4 my-4 items-center px-3 py-2 border-2 rounded-xl border-gray-200 active:border-black ">
        <img
          className='w-[20%] max-w-[8rem] sm:w-[8rem]'
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="motorcycle" />

        <div className="leading-tight grow w-1/2 self-start">
          <h3 className='font-semibold text-lg flex items-center'>Moto <span className='text-base ml-2'><i className="ri-user-fill"></i>1</span></h3>
          <p className='font-medium text-sm sm:text-base'>3 min away </p>
          <p className='text-xs sm:text-sm'>Affordable, motorcycle ride</p>
        </div>

        <h3 className='font-semibold text-lg self-start'>₹65</h3>
      </div >

      {/* Uber Auto */}
      <div onClick={() => {
        setSelectedVehicle('auto')
        setVehiclePanelOpen(false)
        setConfirmRidePanelOpen(true)
      }}
        className="flex w-full gap-2 sm:gap-4 my-4 items-center px-3 py-2 border-2 rounded-xl border-gray-200 active:border-black ">
        <img
          className='w-[20%] max-w-[8rem] sm:w-[8rem]'
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="auto" />

        <div className="leading-tight grow w-1/2 self-start">
          <h3 className='font-semibold text-lg flex items-center'>UberAuto <span className='text-base ml-2'><i className="ri-user-fill"></i>3</span></h3>
          <p className='font-medium text-sm sm:text-base'>3 min away </p>
          <p className='text-xs sm:text-sm'>Affordable, Auto ride</p>
        </div>

        <h3 className='font-semibold text-lg self-start'>₹118.21</h3>
      </div >


    </div >
  )
}

export default VehiclePanel