import React, { useState } from 'react'

const UserDataContext = React.createContext({})

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullname: {
      firstName: '',
      lastName: ''
    }, email: ''
  })

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  )
}

export { UserDataContext }
export default UserContext