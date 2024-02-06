"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  PiShoppingCartSimple,
  PiMinusSquareThin,
  PiPlusSquareThin,
} from "react-icons/pi"

export default function Basket() {
  const [value1, setValue1] = useState(20)
  const [value2, setValue2] = useState(13)

  const add1 = () => {
    setValue1(value1 + 1)
  }

  const minus1 = () => {
    if (value1 != 0) {
      setValue1(value1 - 1)
    }
  }

  const add2 = () => {
    setValue2(value2 + 1)
  }

  const minus2 = () => {
    if (value2 != 0) {
      setValue2(value2 - 1)
    }
  }

  const valueChange1 = (e: any) => {
    setValue1(Number(e.target.value))
  }

  const valueChange2 = (e: any) => {
    setValue2(Number(e.target.value))
  }

  return (
    <Sheet>
      <SheetTrigger className="relative">
        <PiShoppingCartSimple />
        <div className="absolute top-0 left-5 flex justify-center items-center w-6 h-6 bg-destructive text-destructive-foreground text-sm rounded-full">
          2
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="mt-4 text-center text-xl">Košík</div>
          </SheetTitle>
          <SheetDescription asChild>
            <div>
              <div className="my-4">
                <div className="flex items-center">
                  <div className="relative w-1/5 h-16">
                    <Image
                      src="/chicken.jpg"
                      alt="kuře celé"
                      fill={true}
                      sizes="60px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="pl-2">
                    <div className="w-full text-center font-semibold">
                      Kuře celé
                    </div>
                    <div className="flex">
                      <div
                        className="mr-2 text-5xl cursor-pointer"
                        onClick={minus1}
                      >
                        <PiMinusSquareThin />
                      </div>
                      <div className="relative top-1">
                        <Input
                          tabIndex={-1}
                          value={value1}
                          type="number"
                          onChange={valueChange1}
                        />
                      </div>
                      <div
                        className="ml-2 text-5xl cursor-pointer"
                        onClick={add1}
                      >
                        <PiPlusSquareThin />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="my-4">
                <div className="flex items-center">
                  <div className="relative w-1/5 h-16">
                    <Image
                      src="/breasts.jpg"
                      alt="KUŘECÍ PRSNÍ ŘÍZKY SUPREME PO 2"
                      fill={true}
                      sizes="60px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="pl-2">
                    <div className="w-full text-center font-semibold">
                      Kuřecí prsní řízky supreme po 2
                    </div>
                    <div className="flex">
                      <div
                        className="mr-2 text-5xl cursor-pointer"
                        onClick={minus2}
                      >
                        <PiMinusSquareThin />
                      </div>
                      <div className="relative top-1">
                        <Input
                          tabIndex={-1}
                          value={value2}
                          type="number"
                          onChange={valueChange2}
                        />
                      </div>
                      <div
                        className="ml-2 text-5xl cursor-pointer"
                        onClick={add2}
                      >
                        <PiPlusSquareThin />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Button className="w-full">Objednat</Button>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
