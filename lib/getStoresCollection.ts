import { collection, getDocs } from "firebase/firestore"
import { db } from "@/config/firebase"
import { StoreData } from "@/lib/types"

export async function getStoresCollection(email: string) {
  const querySnapshot = await getDocs(collection(db, "users", email, "stores"))

  const stores: StoreData = [{}]

  querySnapshot.forEach((doc) => {
    stores.push(doc.data())
  })

  stores.shift()

  return stores
}
