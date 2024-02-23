import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "@/config/firebase"

export function getImage(fileName: string) {
  const starsRef = ref(storage, fileName)
  const URL = getDownloadURL(starsRef)
    .then((url: string) => {
      // Insert url into an <img> tag to "download"
      return url
    })
    .catch((error: any) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/object-not-found":
          // File doesn't exist
          break
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break
        case "storage/canceled":
          // User canceled the upload
          break

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect the server response
          break
      }
    })

  return URL
}
