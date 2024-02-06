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
import {
  PiShoppingCartSimple,
  PiMinusSquareThin,
  PiPlusSquareThin,
} from "react-icons/pi"

export default function Basket() {
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
            <div className="my-4 text-center text-xl">Košík</div>
          </SheetTitle>
          <SheetDescription asChild>
            <div>
              <div className="mb-4">
                <div className="flex items-center">
                  <Image
                    src="/chicken.jpg"
                    alt="kuře celé"
                    width={86}
                    height={86}
                  />
                  <div className="p-2 border">
                    <div className="w-full text-center font-semibold">
                      Kuře celé
                    </div>
                    <div className="flex">
                      <div className="mr-2 text-5xl">
                        <PiMinusSquareThin />
                      </div>
                      <div className="relative top-1">
                        <Input tabIndex={-1} value={20} />
                      </div>
                      <div className="ml-2 text-5xl">
                        <PiPlusSquareThin />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <Image
                    src="/breasts.jpg"
                    alt="KUŘECÍ PRSNÍ ŘÍZKY SUPREME PO 2"
                    width={86}
                    height={86}
                  />
                  <div className="p-2 border">
                    <div className="w-full text-center font-semibold">
                      Kuřecí prsní řízky supreme po 2
                    </div>
                    <div className="flex">
                      <div className="mr-2 text-5xl">
                        <PiMinusSquareThin />
                      </div>
                      <div className="relative top-1">
                        <Input tabIndex={-1} value={13} />
                      </div>
                      <div className="ml-2 text-5xl">
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
