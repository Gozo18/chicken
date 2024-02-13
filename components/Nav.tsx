"use client"

import Link from "next/link"
import Image from "next/image"
import Basket from "./Basket"
import User from "./User"
import { usePathname } from "next/navigation"

export default function Nav() {
  const path = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-10">
      <nav className="flex justify-between py-2 lg:pt-10 lg:pb-4 px-2 sm:px-4 md:px-8 xl:px-24">
        <Link href="/" className="">
          <Image
            src="/logo.svg"
            alt="logo"
            width={0}
            height={0}
            style={{ width: "120px", height: "auto" }}
            priority={true}
          />
        </Link>
        {path != "/admin" ? (
          <div className="flex text-4xl items-center">
            <>
              {path != "/eshop" ? (
                <div className="flex flex-col items-center ml-2 lg:ml-6 mr-3 md:mr-0">
                  <User />
                  <span className="text-xs opacity-80">From czech s.r.o.</span>
                </div>
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
          <div className="flex items-center">administrace</div>
        )}
      </nav>
    </header>
  )
}
