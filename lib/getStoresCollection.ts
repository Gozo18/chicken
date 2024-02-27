import { collection, getDocs } from "firebase/firestore"
import { db } from "@/config/firebase"
import { StoresData } from "@/lib/types"

export async function getStoresCollection(email: string) {
  const querySnapshot = await getDocs(collection(db, "users", email, "stores"))

  const stores: StoresData = [{}]

  querySnapshot.forEach((doc) => {
    stores.push(doc.data())
  })

  stores.shift()

  return stores
}
