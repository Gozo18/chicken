import { doc, getDoc } from "firebase/firestore"
import { db } from "@/config/firebase"
import { UserData } from "@/lib/types"

export async function getUsersDocument(email: string) {
  const docRef = doc(db, "users", email)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data: UserData = docSnap.data()
    return data
  } else {
    console.log("No such document!")
  }
}
