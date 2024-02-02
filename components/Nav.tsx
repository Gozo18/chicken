import Image from "next/image"
import { PiUser, PiShoppingCartSimple } from "react-icons/pi"

export default function Nav() {
  return (
    <nav className="flex justify-between my-2 lg:mt-10 lg:mb-4 px-2 sm:px-4 md:px-8 xl:px-24">
      <h1 className="text-4xl font-extrabold lg:text-5xl">
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
        <span className="hidden">Farma Loužná</span>
      </h1>
      <div className="flex text-4xl items-center">
        <span className="ml-6">
          <PiUser />
        </span>
        <span className="ml-6">
          <PiShoppingCartSimple />
        </span>
      </div>
    </nav>
  )
}
