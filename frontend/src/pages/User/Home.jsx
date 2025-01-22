import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocationSearchPanel from '../../componenets/User/LocationSearchPanel'
import VehiclePanel from '../../componenets/User/VehiclePanel'
import ConfirmRide from '../../componenets/User/ConfirmRide'
import WaitingForDriver from '../../componenets/User/WaitingForDriver'
import LookingForDriver from '../../componenets/User/LookingForDriver'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false)
  const [lookingForDriverPanelOpen, setLookingForDriverPanelOpen] = useState(false)
  const [waitForDriverPanelOpen, setWaitForDriverPanelOpen] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')

  const panelRef = useRef(null)

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(pickup, destination)
    // make API call to get ride recommendations
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 24,
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        opacity: 0
      })
    }
  }, [panelOpen])

  // console.log(panelOpen, vehiclePanelOpen, confirmRidePanelOpen, waitForDriverPanelOpen)


  return (
    <div className='h-screen relative overflow-hidden'>

      <div className="flex justify-between p-5 bg-transparent fixed top-0 w-full z-10">
        {/* uber-logo */}
        <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
          alt="uber logo"
          className='w-16 '
        />

        {/* logout */}
        <div
          onClick={() => navigate('/login')}
          className=" h-10 w-10 rounded-full flex justify-center items-center cursor-pointer bg-white">
          <i className=" text-xl font-medium ri-logout-box-r-line"></i>
        </div>
      </div>

      {/* map */}
      <div
        onClick={() => {
          setVehiclePanelOpen(false)
        }} className="h-screen w-screen">
        <img src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt=""
          className='h-full w-full object-cover' />
      </div>

      {/* search handler */}
      <div
        className={`flex flex-col justify-end h-screen bottom-0 w-full  absolute left-0`}>
        <div className="bg-white p-5 rounded-t-2xl ">

          {/* Heading */}
          <p className='font-semibold text-xl flex justify-between'>
            Find a trip
            {panelOpen &&
              <i className="mr-2 ri-arrow-down-s-line cursor-pointer"
                onClick={() => setPanelOpen(false)}></i>
            }
          </p>


          <form onSubmit={(e) => submitHandler(e)}
            className='relative'>
            <div className="absolute  h-[4rem] w-[0.025rem]  bg-gray-900 left-6 top-9 bottom-0"></div>

            <input
              type="text"
              placeholder='Add a pick-up location'
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
              className='px-12 py-2 bg-gray-200 rounded-lg w-full placeholder:text-gray-500 mt-5 outline-none' />

            <input
              type="text"
              placeholder='Enter your destination'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
              className='px-12 py-2 bg-gray-200 rounded-lg w-full placeholder:text-gray-500 mt-4 outline-none' />

            <div className=" flex justify-center gap-1 items-center px-5 mt-3  py-2 bg-gray-200 rounded-full w-fit">
              <button className=' font-medium'>Leave Now </button>
              <i className="ri-arrow-down-s-line cursor-pointer"></i>
            </div>
          </form>
        </div>

        <div className={` bg-white h-0 overflow-x-hidden overflow-scroll`} ref={panelRef} >
          {panelOpen && <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />}
        </div>
      </div>

      <VehiclePanel
        vehiclePanelOpen={vehiclePanelOpen}
        setVehiclePanelOpen={setVehiclePanelOpen}
        setConfirmRidePanelOpen={setConfirmRidePanelOpen}
        setSelectedVehicle={setSelectedVehicle} />

      <ConfirmRide
        confirmRidePanelOpen={confirmRidePanelOpen}
        setConfirmRidePanelOpen={setConfirmRidePanelOpen}
        setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}
        selectedVehicle={selectedVehicle} />

      <LookingForDriver
        lookingForDriverPanelOpen={lookingForDriverPanelOpen}
        setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}
        selectedVehicle={selectedVehicle}
      />

      <WaitingForDriver
        waitForDriverPanelOpen={waitForDriverPanelOpen}
        setWaitForDriverPanelOpen={setWaitForDriverPanelOpen}
        selectedVehicle={selectedVehicle} />
    </div >

  )
}

export default Home