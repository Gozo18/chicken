import Link from "next/link"
import Image from "next/image"
import { Info } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Home() {
  return (
    <main className="mt-20 lg:mt-32 px-2 sm:px-4 md:px-8 xl:px-24">
      <h1 className="mb-2 lg:mb-4 text-center font-semibold text-xl">
        Farma Loužná
      </h1>
      <p className="mb-2 lg:mb-4 p-2 lg:p-4 text-center text-sm lg:text-base opacity-80 border">
        Jsme malou rodinnou farmou, která je díky způsobu chovu na českém trhu
        ojedinělá. Zabýváme se chovem kuřat a následným zpracováním kvalitního
        kuřecího masa, které neobsahuje žádná antibiotika.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <Link
          href="/eshop"
          className="relative w-full h-80 lg:h-96 rounded-md overflow-hidden border"
        >
          <Image
            src="/chicken.jpg"
            alt="Farma Loužná - eshop"
            fill={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <h2 className="absolute bottom-2 right-4 z-10 text-primary-foreground text-xl lg:text-2xl">
            pro partnery
          </h2>
        </Link>
        <Link
          href="/nase-kurata"
          className="relative w-full h-80 lg:h-96 rounded-md overflow-hidden border"
        >
          <Image
            src="/ourchickens.jpg"
            alt="Farma Loužná - naše kuřata"
            fill={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <h2 className="absolute bottom-2 right-4 z-10 text-primary-foreground text-xl lg:text-2xl">
            naše kuřata
          </h2>
        </Link>
        <Link
          href="/kontakty"
          className="relative w-full h-80 lg:h-96 rounded-md overflow-hidden border"
        >
          <Image
            src="/contacts.jpg"
            alt="Farma Loužná - eshop"
            fill={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <h2 className="absolute bottom-2 right-4 z-10 text-primary-foreground text-xl lg:text-2xl">
            kontakty
          </h2>
        </Link>
      </div>
      <Alert className="mt-2 lg:mt-4">
        <Info className="h-4 w-4" />
        <AlertTitle>Kde nakoupit?</AlertTitle>
        <AlertDescription>
          Rádi vás obsloužíme u nás na farmě ve všední dny od 8:00 do 16:00. Pro
          větší objednávky pište na náš e-mail:{" "}
          <a href="mailto:info@farmalouzna.cz" className="underline">
            info@farmalouzna.cz
          </a>
          .
        </AlertDescription>
      </Alert>
    </main>
  )
}
