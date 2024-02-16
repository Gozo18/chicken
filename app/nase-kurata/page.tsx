import BackLink from "@/components/Backlink"
import Image from "next/image"

export default function Ourchickens() {
  return (
    <main className="mt-20 lg:mt-32 px-2 sm:px-4 md:px-8 xl:px-24">
      <BackLink />
      <h1 className="mb-2 lg:mb-4 text-center font-semibold text-xl">
        Farma Loužná - naše kuřata
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs lg:text-sm">
        <div className="p-2 lg:p-4">
          <div className="flex justify-center items-center w-full h-20">
            <Image
              src="/volny-chov.png"
              alt="Farma Loužná - volný chov"
              width={62}
              height={53}
              style={{ width: "auto" }}
            />
          </div>
          <h2 className="mb-2 lg:mb-4 text-center font-semibold">VOLNÝ CHOV</h2>
          <p className="text-center opacity-80">
            Kuřata chováme ve vnitřních ohradách se slámovou podestýlkou a s
            dostatečným prostorem k pohybu.
          </p>
        </div>
        <div className="p-2 lg:p-4">
          <div className="flex justify-center items-center w-full h-20">
            <Image
              src="/klidne-prostredi.png"
              alt="Farma Loužná - volný chov"
              width={62}
              height={53}
              style={{ width: "auto" }}
            />
          </div>
          <h2 className="mb-2 lg:mb-4 text-center font-semibold">
            KLIDNÉ PROSTŘEDÍ
          </h2>
          <p className="text-center opacity-80">
            Lokalita farmy a areálu s denním slunečným světlem přispívají k bez
            stresovosti kuřat.
          </p>
        </div>
        <div className="p-2 lg:p-4">
          <div className="flex justify-center items-center w-full h-20">
            <Image
              src="/kvalitni-krmne-smesi.png"
              alt="Farma Loužná - volný chov"
              width={62}
              height={53}
              style={{ width: "auto" }}
            />
          </div>
          <h2 className="mb-2 lg:mb-4 text-center font-semibold">
            KVALITNÍ KRMNÉ SMĚSI
          </h2>
          <p className="text-center opacity-80">
            Vyvinuli jsme vlastní krmnou směs ze surovin pocházejících od
            lokálních dodavatelů.
          </p>
        </div>
        <div className="p-2 lg:p-4">
          <div className="flex justify-center items-center w-full h-20">
            <Image
              src="/bez-antibiotik.png"
              alt="Farma Loužná - volný chov"
              width={62}
              height={53}
              style={{ width: "auto" }}
            />
          </div>
          <h2 className="mb-2 lg:mb-4 text-center font-semibold">
            BEZ ANTIBIOTIK
          </h2>
          <p className="text-center opacity-80">
            Chov kuřat probíhá zcela bez zásahu podpůrných růstových látek nebo
            antibiotik. Bezzávadnost masa testujeme v akreditovaných
            laboratořích.
          </p>
        </div>
        <div className="p-2 lg:p-4">
          <div className="flex justify-center items-center w-full h-20">
            <Image
              src="/rucni-zpracovani.png"
              alt="Farma Loužná - volný chov"
              width={62}
              height={53}
              style={{ width: "auto" }}
            />
          </div>
          <h2 className="mb-2 lg:mb-4 text-center font-semibold">
            RUČNÍ ZPRACOVÁNÍ
          </h2>
          <p className="text-center opacity-80">
            Miniporážka kuřat probíhá přímo na farmě, včetně zpracování a
            porcování masa.
          </p>
        </div>
        <div className="p-2 lg:p-4">
          <div className="flex justify-center items-center w-full h-20">
            <Image
              src="/osobni-pristup.png"
              alt="Farma Loužná - volný chov"
              width={62}
              height={53}
              style={{ width: "auto" }}
            />
          </div>
          <h2 className="mb-2 lg:mb-4 text-center font-semibold">
            OSOBNÍ PŘÍSTUP
          </h2>
          <p className="text-center opacity-80">
            Kuřata každodenně kontrolujeme, věnujeme se detailům a efektivnímu
            zpracování masa.
          </p>
        </div>
        <div className="p-2 lg:p-4">
          <div className="flex justify-center items-center w-full h-20">
            <Image
              src="/duraz-na-kvalitu.png"
              alt="Farma Loužná - volný chov"
              width={62}
              height={53}
              style={{ width: "auto" }}
            />
          </div>
          <h2 className="mb-2 lg:mb-4 text-center font-semibold">
            DŮRAZ NA KVALITU
          </h2>
          <p className="text-center opacity-80">
            Principy našeho chovu vedou ke kvalitnímu kuřecímu masu, které je
            jedno z nejlepších na českém trhu.
          </p>
        </div>
      </div>
    </main>
  )
}
