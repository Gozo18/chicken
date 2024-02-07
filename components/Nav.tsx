"use client"

import Link from "next/link"
import Image from "next/image"
import Basket from "./Basket"
import User from "./User"
import { usePathname } from "next/navigation"

export default function Nav() {
  const router = usePathname()

  console.log(router)

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between py-2 lg:pt-10 lg:pb-4 px-2 sm:px-4 md:px-8 xl:px-24 bg-background z-10">
      <h1 className="text-4xl font-extrabold lg:text-5xl">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={0}
            height={0}
            style={{ width: "150px", height: "auto" }}
          />
          <span className="hidden">Farma Loužná</span>
        </Link>
      </h1>
      {router != "/admin" ? (
        <div className="flex text-4xl items-center">
          <>
            <span className="ml-6">
              <User />
            </span>
            <span className="ml-6 mr-3 md:mr-0">
              <Basket />
            </span>
          </>
        </div>
      ) : (
        <div className="flex items-center">administrace</div>
      )}
    </nav>
  )
}
