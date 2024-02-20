"use client"

import { useEffect } from "react"
import { createContext, useContext, useState } from "react"
import { UserData, StoreData } from "@/lib/types"
import { getUsersDocument } from "@/lib/getUsersDocument"
import { getStoresCollection } from "@/lib/getStoresCollection"
import { useToast } from "@/components/ui/use-toast"

type Context = {
  user: UserData | undefined
  setUser: any
  userEmail: string | undefined
  setUserEmail: any
  stores: StoreData | undefined
  setStores: any
}

const contextDefaultValues: Context = {
  user: {},
  setUser: () => {},
  userEmail: "",
  setUserEmail: () => {},
  stores: [{}],
  setStores: () => {},
}

const AppContext = createContext<Context>(contextDefaultValues)

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const { toast } = useToast()

  const [userEmail, setUserEmail] = useState()
  let [user, setUser] = useState<UserData | undefined>()
  let [stores, setStores] = useState<StoreData | undefined>()

  useEffect(() => {
    if (userEmail != undefined) {
      /* Fetch user info */
      const userData = async () => {
        try {
          const getUserData = await getUsersDocument(userEmail)
          setUser(getUserData)
        } catch (err) {
          toast({
            variant: "secondary",
            title: "Něco se nepovedlo!",
            description: "Zkuste se přihlásit znovu.",
          })
        }
      }

      userData()

      /* Fetch user stores */
      const storesCollection = async () => {
        try {
          const getStoresData = await getStoresCollection(userEmail)
          setStores(getStoresData)
        } catch (err) {
          toast({
            variant: "secondary",
            title: "Něco se nepovedlo!",
            description: "Zkuste se přihlásit znovu.",
          })
        }
      }

      storesCollection()
    }
  }, [userEmail])

  return (
    <AppContext.Provider
      value={{ user, setUser, userEmail, setUserEmail, stores, setStores }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
