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

type UserData = {
  dic?: string
  email?: string
  ico?: string
  mesto?: string
  name?: string
  psc?: string
  telefon?: string
  ulice?: string
  jmeno?: string
}

export default function User({ data }: { data: UserData }) {
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
      <SheetTrigger asChild>
        <div className="flex flex-col items-center ml-2 lg:ml-6 md:mr-0 cursor-pointer">
          <PiUser />
          <span className="text-center text-xs opacity-80">{data.name}</span>
        </div>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>
            <div className="my-4 flex justify-center text-xl">
              <div className="mr-2 text-3xl">
                <PiUserCircleThin />
              </div>
              {data.name}
            </div>
          </SheetTitle>
          <SheetDescription asChild>
            <div>
              <UserInfo data={data} />
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
