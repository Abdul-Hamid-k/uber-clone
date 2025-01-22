import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ReceiveRidePopUp from '../../componenets/Captain/ReceiveRidePopUp'
import CaptainDetails from '../../componenets/Captain/CaptainDetails'
import ConfirmRidePopUp from '../../componenets/Captain/ConfirmRidePopUp'

const CaptainHome = () => {
  const [receiveRidePanelOpen, setReceiveRidePanelOpen] = useState(true)
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false)


  const navigate = useNavigate()



  return (
    <div className='h-screen relative overflow-hidden'>

      <div className="flex justify-between p-5 bg-transparent fixed top-0 w-full">
        {/* uber-logo */}
        <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
          alt="uber logo"
          className='w-16 '
        />

        {/* logout */}
        <div
          onClick={() => navigate('/captain-login')}
          className=" h-10 w-10 rounded-full flex justify-center items-center cursor-pointer bg-white">
          <i className=" text-xl font-medium ri-logout-box-r-line"></i>
        </div>
      </div>

      {/* map */}
      <div className="h-screen">
        <img src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt=""
          className='h-full w-full object-cover' />
      </div>

      <CaptainDetails />

      <ReceiveRidePopUp
        receiveRidePanelOpen={receiveRidePanelOpen}
        setReceiveRidePanelOpen={setReceiveRidePanelOpen}
        setConfirmRidePanelOpen={setConfirmRidePanelOpen} />

      <ConfirmRidePopUp
        confirmRidePanelOpen={confirmRidePanelOpen}
        setConfirmRidePanelOpen={setConfirmRidePanelOpen} />

    </div>
  )
}

export default CaptainHome