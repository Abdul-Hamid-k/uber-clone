import React from 'react'

const CaptainDetails = () => {
  return (
    <>
      {/* Driver Details */}
      <div className="bg-white p-5 fixed  bottom-0 w-full rounded-t-2xl">

        <div className="flex justify-between py-2">
          <div className="flex gap-2">
            <img
              className="w-[3.5rem] h-[3.5rem] object-cover rounded-full"
              src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user-img" />
            <div className="">
              <h4 className='font-medium text-xl'> Enster Berry</h4>
              <h4 className='text-base text-gray-500'> Basic Level</h4>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <h6 className='font-medium text-lg'>₹1920.20</h6>
            <h6 className='font-medium text-base text-gray-500'>Earned</h6>
          </div>
        </div>

        {/* Statice panel */}
        <div className=" bg-yellow-500 flex gap-4 justify-between rounded-xl mt-5">
          <div className="px-2 pt-4 pb-3 w-fit text-center">
            <i className="ri-time-line text-yellow-600 font-thin text-3xl"></i>
            <p className='font-medium text-xl mt-2'>10.2</p>
            <p className='text-xs text-gray-200 mt-1'>HOURS ONLINE</p>
          </div>

          <div className="px-2 pt-4 pb-3 w-fit text-center">
            <i className="ri-speed-up-line text-yellow-600 font-thin text-3xl"></i>
            <p className='font-medium text-xl mt-2'>30KM</p>
            <p className='text-xs text-gray-200 mt-1'>TOTAL DISTANCE</p>
          </div>

          <div className=" px-2 pt-4 pb-3 w-fit text-center">
            <i className="ri-booklet-line text-yellow-600 font-thin text-3xl"></i>
            <p className='font-medium text-xl mt-2'>10.2</p>
            <p className='text-xs text-gray-200 mt-1'>HOURS ONLINE</p>
          </div>
        </div>
      </div></>
  )
}

export default CaptainDetails