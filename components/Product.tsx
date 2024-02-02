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

type ProductType = {
  image: string
  name: string
  desc: string
  pack: string
  code: string
  weight: string
}

export default function Product({
  image,
  name,
  desc,
  pack,
  code,
  weight,
}: ProductType) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          <div className="relative w-full rounded-t-md overflow-hidden">
            <Image src={image} alt={name} width={650} height={650} />
          </div>
        </CardDescription>
      </CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardContent>
        <div className="flex flex-col items-center my-2 xl:text-lg">
          <div className="flex my-1 lg:my-2">
            <span className="mr-2 text-sky-400 text-2xl">
              {desc === "mražené" ? <PiSnowflakeThin /> : <PiThermometerThin />}
            </span>
            <span>{desc}</span>
          </div>
          <div className="flex my-1 lg:my-2">
            <span className="mr-2 text-2xl">
              <PiPackageThin />
            </span>
            <span>{pack}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Drawer>
          <div className="flex w-full flex-col-reverse lg:flex-row lg:justify-between pb-6">
            <Popup name={name} desc={desc} />
            <DrawerTrigger>
              <div className="w-full mb-2 lg:mb-0 px-4 py-2 border rounded-md">
                Podrobnosti
              </div>
            </DrawerTrigger>
          </div>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                {name} - {desc}
              </DrawerTitle>
              <DrawerDescription>
                <div className="flex justify-center w-full flex-col items-center">
                  <Image src={image} alt={name} width={320} height={320} />
                  <div className="mt-6 w-80">
                    <div className="flex justify-between xl:text-lg">
                      <div className="flex">
                        <span className="relative bottom-1 mr-2 text-sky-400 text-2xl">
                          {desc === "mražené" ? (
                            <PiSnowflakeThin />
                          ) : (
                            <PiThermometerThin />
                          )}
                        </span>
                        <span>{desc}</span>
                      </div>
                      <div className="flex">
                        <span className="relative bottom-1 mr-2 text-2xl">
                          <PiPackageThin />
                        </span>
                        <span>{pack}</span>
                      </div>
                    </div>
                    <div className="my-4 w-full divide-y divide-solid">
                      <div className="flex justify-between w-full py-2">
                        <span>Objednací číslo:</span>
                        <span>{code}</span>
                      </div>
                      <div className="flex justify-between w-full py-2">
                        <span>Dostupnost:</span>
                        <span>ihned k odběru</span>
                      </div>
                      <div className="flex justify-between w-full py-2">
                        <span>Hmotnost od-do:</span>
                        <span>{weight}</span>
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
