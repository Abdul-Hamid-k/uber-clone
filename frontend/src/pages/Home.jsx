import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* background */}
      <div className="bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center h-screen w-full pt-8 flex flex-col justify-between">

        {/* uber-logo */}
        <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="uber logo"
          className='w-16 ml-8'
        />

        {/* text */}
        <div className="bg-white w-full p-4 pb-7 rounded-t-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-7">
          <p className='text-3xl font-bold'>Get Started with Uber</p>
          <Link to='/login' className='text-center bg-black text-white w-full sm:w-1/4 py-3 font-medium text-xl rounded-md'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home