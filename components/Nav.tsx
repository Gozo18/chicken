"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Basket from "./Basket"
import User from "./User"
import { usePathname, useRouter } from "next/navigation"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"
import { useToast } from "@/components/ui/use-toast"
import Login from "./Login"
import { PiHouseLine } from "react-icons/pi"

export default function Nav() {
  const { toast } = useToast()
  const path = usePathname()
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if (path === "/eshop" || path === "/admin") {
      if (!user) {
        toast({
          variant: "destructive",
          title: "Prosím, přihlašte se!",
          description: "Pro vstup do této sekce je potřeba se přihlásit.",
        })
        router.push("/")
      }
    }
  }, [path])

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-10">
      <nav className="flex justify-between py-2 lg:pt-10 lg:pb-4 px-2 sm:px-4 md:px-8 xl:px-24">
        <Link href="/" className="">
          <Image
            src="/logo.svg"
            alt="logo"
            width={0}
            height={0}
            style={{ width: "140px", height: "auto" }}
            priority={true}
          />
        </Link>
        {path != "/admin" ? (
          <div className="flex text-4xl items-center">
            <>
              {!user ? (
                <Login />
              ) : (
                <>
                  <div className="flex flex-col items-center ml-2 lg:ml-6 md:mr-0">
                    <User />
                    <span className="text-center text-xs opacity-80">
                      From czech s.r.o.
                    </span>
                  </div>
                  <div className=" ml-2 lg:ml-6 mr-3 md:mr-0">
                    <Basket />
                  </div>
                </>
              )}
            </>
          </div>
        ) : (
          <Link href="/" className="flex flex-col items-center text-4xl">
            <PiHouseLine />
            <span className="text-center text-xs opacity-80">Domů</span>
          </Link>
        )}
      </nav>
    </header>
  )
}
