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
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

type ProductType = {
  image: string
  name: string
  desc: string
  code: string
  weight: string
}

export default function Product({
  image,
  name,
  desc,
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
        <p className="my-2">{desc}</p>
      </CardContent>
      <CardFooter>
        <Drawer>
          <div className="flex w-full flex-col-reverse lg:flex-row lg:justify-between pb-6">
            <div className="px-4 py-2 border rounded-md bg-primary text-primary-foreground text-center">
              Objednat
            </div>
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
                  <div className="mt-8">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            Objednací číslo:
                          </TableCell>
                          <TableCell>{code}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Dostupnost:
                          </TableCell>
                          <TableCell> ihned k odběru</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            Hmotnost od-do:
                          </TableCell>
                          <TableCell>{weight}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
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
