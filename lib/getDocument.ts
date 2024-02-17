"use server"

import { doc, getDoc } from "firebase/firestore"
import { db } from "@/config/firebase"

type UserData = {
  dic: string
  email: string
  ico: string
  mesto: string
  name: string
  psc: string
  telefon: string
  ulice: string
  jmeno: string
}

export async function getDocument(email: string) {
  const docRef = doc(db, "users", email)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    let data: any = {
      dic: "",
      email: "",
      ico: "",
      mesto: "",
      name: "",
      psc: "",
      telefon: "",
      ulice: "",
      jmeno: "",
    }
    data = docSnap.data()
    return data
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!")
  }
}
