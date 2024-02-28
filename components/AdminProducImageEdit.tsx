"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { getImage } from "@/lib/getImage"
import { Input } from "@/components/ui/input"

type Picture = {
  pic: string
}

export default function AdminProducImageEdit(picture: Picture) {
  const [imageUrl, setImageUrl] = useState("")
  const [loadingImage, setLoadingImage] = useState(true)

  useEffect(() => {
    const getUrl = async () => {
      if (picture.pic) {
        const url = await getImage(picture.pic)
        const urlString = String(url)
        setImageUrl(urlString)
        setLoadingImage(false)
      }
    }

    getUrl()
  }, [picture.pic])

  return (
    <div>
      <Input id="picture" type="file" />
      <div className="relative mt-2 w-full h-32">
        <Image
          src={imageUrl}
          alt=""
          fill={true}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}
