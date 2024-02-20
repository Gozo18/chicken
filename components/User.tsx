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
import { auth } from "@/config/firebase"
import { Button } from "./ui/button"
import { useAppContext } from "@/context/context"
import UserInfo from "./UserInfo"

export default function User() {
  const router = useRouter()
  const { toast } = useToast()
  const { user } = useAppContext()

  /* User logout */
  const logout = () => {
    router.push("/")
    auth.signOut()
    toast({
      variant: "secondary",
      title: "Odhlášeno!",
      description: "Byli jste odhlášeni.",
    })
  }

  if (user) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex flex-col items-center ml-2 lg:ml-6 md:mr-0 cursor-pointer">
            <PiUser />
            <span className="text-center text-xs opacity-80">{user.name}</span>
          </div>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>
              <div className="my-4 flex justify-center text-xl">
                <div className="mr-2 text-3xl">
                  <PiUserCircleThin />
                </div>
                {user.name}
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
}
