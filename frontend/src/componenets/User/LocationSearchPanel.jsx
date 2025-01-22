import React from 'react'

const LocationSearchPanel = ({ setVehiclePanelOpen, setPanelOpen }) => {

  const locations = [
    { name: "New Market", address: "New Market, Bhopal, Madhya Pradesh 462003" },
    { name: "MP Nagar", address: "MP Nagar, Bhopal, Madhya Pradesh 462011" },
    { name: "Arera Colony", address: "Arera Colony, Bhopal, Madhya Pradesh 462016" },
    { name: "Kolar Road", address: "Kolar Road, Bhopal, Madhya Pradesh 462042" },
    { name: "Hoshangabad Road", address: "Hoshangabad Road, Bhopal, Madhya Pradesh 462026" },
    { name: "Shahpura", address: "Shahpura, Bhopal, Madhya Pradesh 462039" },
    { name: "Bairagarh", address: "Bairagarh, Bhopal, Madhya Pradesh 462030" },
    { name: "Chuna Bhatti", address: "Chuna Bhatti, Bhopal, Madhya Pradesh 462016" },
    { name: "Indrapuri", address: "Indrapuri, Bhopal, Madhya Pradesh 462022" },
    { name: "Ayodhya Bypass", address: "Ayodhya Bypass, Bhopal, Madhya Pradesh 462041" }
  ]


  return (
    <>
      {locations.map((location, index) => (
        <div
          onClick={() => {
            setVehiclePanelOpen(true)
            setPanelOpen(false)
          }}
          key={index}
          className='flex  items-center px-2 py-1 my-2 active:border-[0.1rem] border-white active:border-black rounded-xl justify-start  gap-3 cursor-pointer'>
          {/* Sample data */}
          <i className="ri-map-pin-2-fill bg-gray-200 flex justify-center items-center h-9 w-9 rounded-full shrink-0"></i>
          <div className="">
            <h6 className='font-medium'>{location.name}</h6>
            <p className='text-sm leading-tight'>{location.address}</p>
          </div>
        </div>
      ))}




    </>
  )
}

export default LocationSearchPanel