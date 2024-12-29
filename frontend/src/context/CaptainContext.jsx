import React, { useState } from 'react'

const CaptainDataContext = React.createContext({})

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState({
    fullname: {
      firstName: '',
      lastName: ''
    }, email: '',
    vehicle: {
      color: '',
      plate: '',
      capacity: 1,
      vehicle: ''
    }
  })
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
  }

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  )
}

export { CaptainDataContext }
export default CaptainContext