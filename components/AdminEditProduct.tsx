"use client"

import { useState, useEffect } from "react"
import { ProductType } from "@/lib/types"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getImage } from "@/lib/getImage"
import {
  PiPackageThin,
  PiSnowflakeThin,
  PiThermometerThin,
} from "react-icons/pi"

export default function AdminEditProduct(item: ProductType) {
  const {
    DPH,
    akce,
    akceCena,
    bezDPH,
    dostupnost,
    hmotnost,
    kod,
    nazev,
    obal,
    obraz,
    stav,
    zobrazit,
  } = item.item

  const [imageUrl, setImageUrl] = useState("")
  const [loadingImage, setLoadingImage] = useState(true)

  useEffect(() => {
    const getUrl = async () => {
      if (obraz) {
        const url = await getImage(obraz)
        const urlString = String(url)
        setImageUrl(urlString)
        setLoadingImage(false)
      }
    }

    getUrl()
  }, [obraz])

  // Format the amount as a czk amount
  let formatted
  if (bezDPH != undefined) {
    const amount: number = bezDPH
    formatted = new Intl.NumberFormat("cs-CS", {
      style: "currency",
      currency: "CZK",
    }).format(amount)
  }

  return (
    <div className="flex justify-center w-full flex-col items-center">
      <div className="relative flex justify-center w-80 h-80 flex-col items-center">
        {!loadingImage ? (
          <>
            {nazev && (
              <Image
                src={imageUrl}
                alt={nazev}
                fill={true}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </>
        ) : (
          <div role="status" className="w-full h-full animate-pulse">
            <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded">
              <svg
                className="w-10 h-10 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 w-80">
        <div className="flex justify-between xl:text-lg">
          <div className="flex">
            <span className="relative bottom-1 mr-2 text-sky-700 text-2xl">
              {stav === "mražené" ? <PiSnowflakeThin /> : <PiThermometerThin />}
            </span>
            <span>{stav}</span>
          </div>
          <div className="flex">
            <span className="relative bottom-1 mr-2 text-2xl">
              <PiPackageThin />
            </span>
            <span>{obal}</span>
          </div>
        </div>
        <div className="my-2 lg:my-4 w-full text-lg text-center text-sky-700 font-semibold">
          {formatted}{" "}
          <span className="text-xs text-primary font-normal">bez DPH</span>
        </div>
        <div className="my-2 lg:my-4 w-full divide-y divide-solid">
          <div className="flex justify-between w-full py-2">
            <span>Objednací číslo:</span>
            <span>{kod}</span>
          </div>
          <div className="flex justify-between w-full py-2">
            <span>Dostupnost:</span>
            <span>{dostupnost}</span>
          </div>
          <div className="flex justify-between w-full py-2">
            <span>Hmotnost od-do:</span>
            <span>{hmotnost}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
