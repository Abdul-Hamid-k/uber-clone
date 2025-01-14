import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const WaitingForDriver = ({ waitForDriverPanelOpen, setWaitForDriverPanelOpen }) => {
  const waitForDriverRef = useRef(null)
  const selectedVehicle = 'car'

  useGSAP(() => {
    if (waitForDriverPanelOpen) {
      gsap.to(waitForDriverRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(waitForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [waitForDriverPanelOpen])


  return (
    <>
      {/* Wait For Driver panel */}
      <div
        ref={waitForDriverRef}
        className="fixed left-0 bottom-0 w-full rounded-t-2xl  px-3 py-6 bg-white translate-y-full">

        {/* heading */}
        <div className="flex justify-between items-center">
          <h5 className='font-medium text-xl'>Meet at the pickup point </h5>
          <p className='bg-black text-white w-fit text-center px-3 py-1'>2 <br /> min</p>
        </div>

        {/* Ride details */}
        <div className="relative mt-3 pt-2 flex justify-between items-center border-t-2 border-gray-200">

          {/* selected vehicle icon */}
          <div className="">
            {selectedVehicle === 'motorcycle' && <img
              className='absolute top-5 left-9 w-[40%] -z-10 max-w-[8rem]'
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              alt="motorcycle" />}

            {selectedVehicle === 'car' && <img
              className='absolute top-3 left-9 w-[40%] -z-10 max-w-[8rem] '
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png"
              alt="car" />}

            {selectedVehicle === 'auto' && <img
              className='absolute top-0 left-9 w-[40%] -z-10 max-w-[8rem]'
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt="auto" />}
            <i className="ri-user-smile-fill z-5 text-8xl"></i>
          </div>


          <div className="flex flex-col items-end w-[10rem] max-w-[12rem]">
            <h5 className='uppercase text-gray-600 font-medium'>santa</h5>
            <h2 className='uppercase font-bold text-2xl'>ka15ak00-0</h2>
            <h5 className='cappitalize text-gray-600 text-sm'>white suzuki S-presso LXI</h5>
            <h6 className='text-gray-600'> <i className="ri-star-fill"></i> 4.9</h6>
          </div>

        </div>

        {/* message box */}
        <div className="bg-gray-200 rounded-lg flex px-3 py-2 mt-5 text-gray-600">
          <input type="text" className='bg-transparent grow outline-none placeholder:text-gray-500' placeholder='Send a message...' />
          <i className="ri-send-plane-2-fill"></i>
        </div>

        {/* features */}
        {/* <div className="mt-9 mb-5 flex justify-around">
          <div className="flex flex-col items-center flex-1 cursor-pointer">
            <i className="ri-shield-fill text-blue-600 shrink-0 text-xl px-4 py-3 bg-gray-200 rounded-full"></i>
            <p className='mt-2 font-medium'>Safety</p>
          </div>

          <div className="flex flex-col items-center flex-1  cursor-pointer">
            <i className="ri-map-pin-fill shrink-0 text-blue-600 text-xl px-4 py-3 bg-gray-200 rounded-full"></i>
            <p className='mt-2 font-medium'>Share my trip</p>
          </div>

          <div className="flex flex-col items-center flex-1 cursor-pointer">
            <i className="ri-phone-fill shrink-0 text-blue-600 text-xl px-4 py-3 bg-gray-200 rounded-full"></i>
            <p className='mt-2 font-medium'>Call Driver</p>
          </div>

        </div> */}

        {/* address */}
        {/* Sample destiation location data */}
        <div className='flex items-center px-2 py-1 my-2 justify-start  gap-3 cursor-pointer border-t-2 border-gray-200'>
          <i className="ri-map-pin-2-fill text-xl flex justify-center items-center h-9 w-9 rounded-full shrink-0"></i>

          <div className="">
            <h6 className='font-medium'>MP Nagar</h6>
            <p className='text-sm leading-tight'>MP Nagar, Bhopal, Madhya Pradesh 462011</p>
          </div>
        </div>

        {/* cost */}
        {/* Sample data */}
        <div className='flex items-center px-2 py-1 my-2 justify-start  gap-3 cursor-pointer border-t-2 border-gray-200'>
          <i className="ri-bank-card-2-fill flex justify-center items-center text-xl h-9 w-9 rounded-full shrink-0"></i>
          <div className="">
            <h6 className='font-medium'>₹192.20</h6>
            <p className='text-sm leading-tight'>Cash</p>
          </div>
        </div >

        <button
          onClick={() => {
            setWaitForDriverPanelOpen(false)
          }}
          className='bg-red-600 w-full px-3 py-2 mt-5 rounded-lg text-white text-lg font-medium'>
          Cancel Ride
        </button>
      </div ></>
  )
}

export default WaitingForDriver