"use server"

import { doc, getDoc } from "firebase/firestore"
import { db } from "@/config/firebase"

export async function getUsersDocument(email: string) {
  const docRef = doc(db, "users", email)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data: any = docSnap.data()
    return data
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!")
  }
}
