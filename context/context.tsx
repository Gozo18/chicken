"use client"

import { useEffect } from "react"
import { createContext, useContext, useState } from "react"
import { UserData } from "@/lib/types"
import { getUsersDocument } from "@/lib/getUsersDocument"

type Context = {
  user: UserData | undefined
  setUser: any
  userEmail: string | undefined
  setUserEmail: any
}

const contextDefaultValues: Context = {
  user: {
    dic: "",
    email: "",
    ico: "",
    mesto: "",
    name: "",
    psc: "",
    telefon: "",
    ulice: "",
    jmeno: "",
  },
  setUser: () => {},
  userEmail: "",
  setUserEmail: () => {},
}

const AppContext = createContext<Context>(contextDefaultValues)

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState()
  let [user, setUser] = useState<UserData | undefined>()

  useEffect(() => {
    if (userEmail != undefined) {
      const userData = async () => {
        try {
          const getData = await getUsersDocument(userEmail)
          setUser(getData)
        } catch (err) {
          console.log("Něco se nepovedlo!")
        }
      }

      userData()
    }
  }, [userEmail])

  return (
    <AppContext.Provider value={{ user, setUser, userEmail, setUserEmail }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
