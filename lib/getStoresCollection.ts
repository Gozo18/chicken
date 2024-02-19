"use server"

import { collection, getDocs } from "firebase/firestore"
import { db } from "@/config/firebase"

export async function getStoresCollection(email: string) {
  const querySnapshot = await getDocs(collection(db, "users", email, "stores"))

  const stores: any = []

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    stores.push(doc.data())
  })

  return stores
}
