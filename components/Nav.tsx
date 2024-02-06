import Image from "next/image"
import Basket from "./Basket"
import User from "./User"

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between py-2 lg:pt-10 lg:pb-4 px-2 sm:px-4 md:px-8 xl:px-24 bg-background z-10">
      <h1 className="text-4xl font-extrabold lg:text-5xl">
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
        <span className="hidden">Farma Loužná</span>
      </h1>
      <div className="flex text-4xl items-center">
        <span className="ml-6">
          <User />
        </span>
        <span className="ml-6 mr-3 md:mr-0">
          <Basket />
        </span>
      </div>
    </nav>
  )
}
