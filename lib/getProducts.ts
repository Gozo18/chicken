import { collection, getDocs } from "firebase/firestore"
import { db } from "@/config/firebase"
import { ProductsData } from "@/lib/types"

export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"))

  const products: ProductsData = [{}]

  querySnapshot.forEach((doc) => {
    products.push(doc.data())
  })

  products.shift()

  return products
}
