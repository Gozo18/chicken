import Image from "next/image"
import Product from "@/components/Product"

export default function Home() {
  return (
    <main className="min-h-screen px-2 sm:px-4 md:px-8 xl:px-24">
      <h1 className="my-2 lg:my-10 text-4xl font-extrabold lg:text-5xl">
        <Image
          src="/logo.svg"
          alt="logo"
          width={150}
          height={150}
          style={{ fill: "#000" }}
        />
        <span className="hidden">Farma Loužná</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        <Product
          image="/chicken.jpg"
          name="Kuře celé"
          desc="chlazené, vakuum/sáček"
          code="k90"
          weight="1,5-2,9 kg"
        />
        <Product
          image="/freezedchicken.jpg"
          name="Kuře celé"
          desc="mražené, vakuum/sáček"
          code="k90"
          weight="1,5-2,9 kg"
        />
        <Product
          image="/breasts.jpg"
          name="Kuřecí prsní řízky SUPREME po 2"
          desc="chlazené, vakuum/sáček"
          code="k116"
          weight="0,4-1,1 kg"
        />
        <Product
          image="/freezedbreasts.jpg"
          name="Kuřecí prsní řízky SUPREME po 2"
          desc="mražené, vakuum/sáček"
          code="k116"
          weight="0,4-1,1 kg"
        />
      </div>
    </main>
  )
}
