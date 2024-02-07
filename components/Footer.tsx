import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center mt-2 lg:mt-10 py-6 w-full bg-primary text-primary-foreground">
      <ul className="my-6 text-center">
        <li className="mb-4">Přihlášení</li>
        <li className="mb-4">O nás</li>
        <li className="mb-4">Kontakty</li>
        <li className="mb-4">
          <Link href="/admin">Administrace</Link>
        </li>
      </ul>
      <Link href="/">
        <Image
          src="/footerlogo.svg"
          alt="logo"
          width={0}
          height={0}
          style={{ width: "120px", height: "auto" }}
        />
      </Link>
    </footer>
  )
}
