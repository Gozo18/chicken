import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PiUser, PiUserCircleThin } from "react-icons/pi"
import UserInfo from "./UserInfo"

export default function User() {
  return (
    <Sheet>
      <SheetTrigger>
        <PiUser />
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>
            <div className="my-4 flex justify-center text-xl">
              <div className="mr-2 text-3xl">
                <PiUserCircleThin />
              </div>
              From Czech s.r.o.
            </div>
          </SheetTitle>
          <SheetDescription asChild>
            <div>
              <UserInfo />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
