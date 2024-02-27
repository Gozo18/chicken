"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  PiPackageThin,
  PiSnowflakeThin,
  PiThermometerThin,
} from "react-icons/pi"
import Popup from "./Popup"
import { useAppContext } from "@/context/context"
import { getImage } from "@/lib/getImage"
import { ProductType } from "@/lib/types"

export default function Product(item: ProductType) {
  const { userEmail } = useAppContext()

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

  const amount: any = bezDPH

  // Format the amount as a czk amount
  const formatted = new Intl.NumberFormat("cs-CS", {
    style: "currency",
    currency: "CZK",
  }).format(amount)

  return (
    <Card>
      <CardHeader>
        <CardDescription>
          <div className="relative w-full h-96 rounded-t-md overflow-hidden">
            {!loadingImage && nazev ? (
              <Image
                src={imageUrl}
                alt={nazev}
                fill={true}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
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
        </CardDescription>
      </CardHeader>
      <CardTitle>{nazev}</CardTitle>
      <CardContent>
        <div className="flex flex-col items-center my-2 xl:text-lg">
          <div className="flex my-1 lg:my-2">
            <span className="mr-2 text-sky-700 text-2xl">
              {stav === "mražené" ? <PiSnowflakeThin /> : <PiThermometerThin />}
            </span>
            <span>{stav}</span>
          </div>
          <div className="flex my-1 lg:my-2">
            <span className="mr-2 text-2xl">
              <PiPackageThin />
            </span>
            <span>{obal}</span>
          </div>
          {userEmail && (
            <div className="mb-2 text-xl text-sky-700 font-semibold">
              {formatted}{" "}
              <span className="text-xs text-primary font-normal">bez DPH</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Drawer>
          <div className="flex w-full flex-col-reverse lg:flex-row lg:justify-between pb-6">
            {userEmail && nazev ? <Popup name={nazev} /> : <div></div>}
            <DrawerTrigger>
              <div className="w-full mb-2 lg:mb-0 px-4 py-2 border rounded-md">
                Podrobnosti
              </div>
            </DrawerTrigger>
          </div>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{nazev}</DrawerTitle>
              <DrawerDescription asChild>
                <div className="flex justify-center w-full flex-col items-center">
                  {nazev && (
                    <Image
                      src={imageUrl}
                      alt={nazev}
                      width={320}
                      height={320}
                    />
                  )}
                  <div className="mt-6 w-80">
                    <div className="flex justify-between xl:text-lg">
                      <div className="flex">
                        <span className="relative bottom-1 mr-2 text-sky-700 text-2xl">
                          {stav === "mražené" ? (
                            <PiSnowflakeThin />
                          ) : (
                            <PiThermometerThin />
                          )}
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
                    <div className="mt-4 w-full text-lg text-center text-sky-700 font-semibold">
                      {formatted}{" "}
                      <span className="text-xs text-primary font-normal">
                        bez DPH
                      </span>
                    </div>
                    <div className="my-4 w-full divide-y divide-solid">
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
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <div className="flex justify-center items-center w-full h-10 border rounded-md">
                  Zavřít
                </div>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardFooter>
    </Card>
  )
}
