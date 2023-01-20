"use client"
import { createContext, useState } from "react"

export const UserContext = createContext({} as any)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    favorites: []
  })

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}