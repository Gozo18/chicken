import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
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
import { auth } from "../config/firebase"
import { Button } from "./ui/button"

export default function User() {
  const router = useRouter()
  const { toast } = useToast()

  const logout = () => {
    router.push("/")
    auth.signOut()
    toast({
      variant: "secondary",
      title: "Odhlášeno!",
      description: "Byli jste odhlášeni.",
    })
  }

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
              <Button className="mt-12 float-right" onClick={logout}>
                Odhlásit se
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
