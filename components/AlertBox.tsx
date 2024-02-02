import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PiInfoThin } from "react-icons/pi"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function AlertBox() {
  return (
    <Alert>
      <AlertTitle>
        Aktuální týden porážky
        <Popover>
          <PopoverTrigger>
            <div className="relative top-1 ml-2 text-2xl">
              <PiInfoThin />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            Kuřata jsou porážena ve pětitýdenních cyklech, kdy každý týden
            dosahují větší hmotnosti a mají vyzrálejší maso.
          </PopoverContent>
        </Popover>
      </AlertTitle>
      <AlertDescription>
        <div className="w-full max-w-md grid grid-cols-5 mt-2 rounded-md overflow-hidden">
          <div className="py-2 border opacity-60 text-center">1.týden</div>
          <div className="py-2 border opacity-60 text-center">2.týden</div>
          <div className="py-2 border opacity-60 text-center">3.týden</div>
          <div className="py-2 border opacity-60 text-center">4.týden</div>
          <div className="py-2 border text-center bg-primary text-primary-foreground text-center">
            5.týden
          </div>
        </div>
      </AlertDescription>
    </Alert>
  )
}
