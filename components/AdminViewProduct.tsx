import { ProductType } from "@/lib/types"
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
import AdminEditProduct from "./AdminEditProduct"

export default function AdminViewProduct(item: ProductType) {
  const { nazev } = item.item

  return (
    <Drawer>
      <DrawerTrigger>upravit</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{nazev}</DrawerTitle>
          <DrawerDescription asChild>
            <AdminEditProduct item={item.item} />
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
  )
}
