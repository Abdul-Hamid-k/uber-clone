import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FinishRide from '../../componenets/Captain/FinishRide'

const CaptainRiding = () => {
  const [finishRidePanelOpen, setFinishRidePanelOpen] = useState(false)


  const navigate = useNavigate()
  const selectedVehicle = 'car'



  return (
    <div className='h-screen relative'>
      <div className="flex justify-between p-5 bg-transparent fixed top-0 w-full">
        {/* uber-logo */}
        <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
          alt="uber logo"
          className='w-16 '
        />

        {/* Home */}
        <div
          onClick={() => navigate('/captain-home')}
          className=" h-10 w-10 rounded-full flex justify-center items-center bg-white">
          <i className=" text-xl font-medium ri-home-4-line"></i>
        </div>
      </div>



      {/* map */}
      <div className="h-[85%]">
        <img src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt=""
          className='h-full w-full object-cover' />
      </div>

      {/* Complete Ride Panel */}
      <div className="w-full h-screen flex flex-col justify-end absolute top-0 left-0 ">
        <div className="h-[15%] rounded-t-2xl bg-white px-3 pb-4"
          onClick={(prev) => {
            setFinishRidePanelOpen(!finishRidePanelOpen)
          }}>
          {/* close arrow */}
          <h5
            id='closeArrow'
            className='w-[100%] text-center mx-auto rotate-180 mb-1'
          >
            <i className="ri-arrow-down-wide-line text-lg cursor-pointer"></i>
          </h5>

          <div className="flex justify-around items-center">
            <h4 className='text-center text-lg font-medium shrink-0'>2.4 KM Away</h4>

            {/* action button */}
            <div className=" ">
              <button
                onClick={() => {

                }}
                className='px-4 py-2 bg-green-600 text-white rounded-lg font-medium text-lg'>
                Complete Ride
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Finish Ride PopUp */}
      <FinishRide
        finishRidePanelOpen={finishRidePanelOpen}
        setFinishRidePanelOpen={setFinishRidePanelOpen} />



    </div>
  )
}

export default CaptainRiding