import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ProductType } from "@/lib/types"

export default function Popup(item: ProductType) {
  const { nazev } = item.item
  return (
    <Dialog>
      <DialogTrigger>
        <div className="px-4 py-2 border rounded-md bg-primary text-primary-foreground text-center">
          Objednat
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="mt-8">
              Objednat <span className="uppercase">{nazev}</span>?
            </div>
          </DialogTitle>
          <DialogDescription asChild>
            <div>
              <div className="my-6">Zadejte počet kusů a potvrďte.</div>
              <Input type="number" placeholder="Počet kusů" />
              <div className="w-full mt-6 mb-8 px-4 py-3 border rounded-md bg-primary text-primary-foreground text-center cursor-pointer">
                Objednat
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
