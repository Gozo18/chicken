"use client"

import { useEffect } from "react"
import { createContext, useContext, useState } from "react"
import { UserData, StoreData, ProductsData } from "@/lib/types"
import { getUsersDocument } from "@/lib/getUsersDocument"
import { getStoresCollection } from "@/lib/getStoresCollection"
import { getProducts } from "@/lib/getProducts"
import { useToast } from "@/components/ui/use-toast"

type Context = {
  user: UserData | undefined
  setUser: (value: undefined | UserData) => void
  userEmail: string | null | undefined
  setUserEmail: (value: null | string | undefined) => void
  stores: StoreData | undefined
  setStores: (value: undefined | StoreData) => void
  products: ProductsData | undefined
  setProducts: (value: undefined | ProductsData) => void
}

const contextDefaultValues: Context = {
  user: {},
  setUser: () => {},
  userEmail: "",
  setUserEmail: () => {},
  stores: [{}],
  setStores: () => {},
  products: undefined,
  setProducts: () => {},
}

const AppContext = createContext<Context>(contextDefaultValues)

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const { toast } = useToast()

  const [userEmail, setUserEmail] = useState<string | null | undefined>()
  let [user, setUser] = useState<UserData | undefined>()
  let [stores, setStores] = useState<StoreData | undefined>()
  let [products, setProducts] = useState<ProductsData | undefined>()

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

  /* Fetch products */
  useEffect(() => {
    const productsCollection = async () => {
      try {
        const getProductsData = await getProducts()
        setProducts(getProductsData)
      } catch (err) {
        toast({
          variant: "secondary",
          title: "Něco se nepovedlo!",
          description: "Zkuste načíst znovu stránku.",
        })
      }
    }

    productsCollection()
  }, [])

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        userEmail,
        setUserEmail,
        stores,
        setStores,
        products,
        setProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
