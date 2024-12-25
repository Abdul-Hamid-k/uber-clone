import React, { useState } from 'react'

const UserDataContext = React.createContext({})

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState({
    fullname: {
      firstName: '',
      lastName: ''
    }, email: ''
  })

  return (
    <UserDataContext.Provider values={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext