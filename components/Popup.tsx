import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

type PopupType = {
  name: string
  desc: string
}

export default function Popup({ name, desc }: PopupType) {
  return (
    <Dialog>
      <DialogTrigger>Objednat</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Chcete si objednat {name} - {desc}?
          </DialogTitle>
          <DialogDescription>
            <div className="my-6">Zadejte počet kusů a potvrďte.</div>
            <Input type="number" placeholder="Počet kusů" />
            <div className="w-full mt-6 px-4 py-2 border rounded-md bg-primary text-primary-foreground text-center cursor-pointer">
              Objednat
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
