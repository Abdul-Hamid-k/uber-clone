import React from 'react'
import { useNavigate } from 'react-router-dom'

const Riding = () => {
  const navigate = useNavigate()
  const selectedVehicle = 'car'
  return (
    <div className='h-screen'>
      <div className="flex justify-between p-5 bg-transparent fixed top-0 w-full">
        {/* uber-logo */}
        <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
          alt="uber logo"
          className='w-16 '
        />

        {/* Home */}
        <div
          onClick={() => navigate('/home')}
          className=" h-10 w-10 rounded-full flex justify-center items-center bg-white">
          <i className=" text-xl font-medium ri-home-4-line"></i>
        </div>
      </div>



      {/* map */}
      <div className="h-3/5">
        <img src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt=""
          className='h-full w-full object-cover' />
      </div>

      <div className="w-full rounded-t-2xl px-3 py-4 h-2/5">
        {/* Ride details */}
        <div className=" relative flex justify-between items-center mb-4">
          {/* selected vehicle icon */}
          <div className="">
            {selectedVehicle === 'motorcycle' && <img
              className='w-[9rem] -z-10 max-w-[11rem]'
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              alt="motorcycle" />}

            {selectedVehicle === 'car' && <img
              className='w-[9rem] -z-10 max-w-[11rem]'
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png"
              alt="car" />}

            {selectedVehicle === 'auto' && <img
              className='w-[9rem] -z-10 max-w-[11rem]'
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt="auto" />}
          </div>


          <div className="flex flex-col items-end w-[10rem] max-w-[12rem]">
            <h5 className='uppercase text-gray-600 font-medium'>santa</h5>
            <h2 className='uppercase font-bold text-2xl'>ka15ak00-0</h2>
            <h5 className='cappitalize text-gray-600 text-sm'>white suzuki S-presso LXI</h5>
            <h6 className='text-gray-600'> <i className="ri-star-fill"></i> 4.9</h6>
          </div>
        </div>

        {/* address */}
        <>
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
        </>

        {/* payment button */}
        <button
          className='bg-green-600 w-full px-3 py-2 mt-5 rounded-lg text-white text-lg font-medium'>
          Make a payment
        </button>
      </div>


    </div>
  )
}

export default Riding