import Product from "@/components/Product"
import AlertBox from "@/components/AlertBox"

export default function Eshop() {
  return (
    <main className="mt-20 lg:mt-32 px-2 sm:px-4 md:px-8 xl:px-24">
      <h1 className="text-center font-semibold text-xl">
        Farma Loužná - e-shop
      </h1>
      <div className="my-2 lg:my-4">
        <AlertBox />
      </div>
      <h2 className="mb-2 lg:mb-4 text-center font-semibold text-lg">
        Naše nabídka
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
        <Product
          image="/chicken.jpg"
          name="Kuře celé"
          desc="chlazené"
          pack="vakuum/sáček"
          code="k90"
          weight="1,5-2,9 kg"
        />
        <Product
          image="/freezedchicken.jpg"
          name="Kuře celé"
          desc="mražené"
          pack="vakuum/sáček"
          code="k90"
          weight="1,5-2,9 kg"
        />
        <Product
          image="/breasts.jpg"
          name="Kuřecí prsní řízky SUPREME po 2"
          desc="chlazené"
          pack="vakuum/sáček"
          code="k116"
          weight="0,4-1,1 kg"
        />
        <Product
          image="/freezedbreasts.jpg"
          name="Kuřecí prsní řízky SUPREME po 2"
          desc="mražené"
          pack="vakuum/sáček"
          code="k116"
          weight="0,4-1,1 kg"
        />
        <Product
          image="/chicken.jpg"
          name="Kuře celé"
          desc="chlazené"
          pack="vakuum/sáček"
          code="k90"
          weight="1,5-2,9 kg"
        />
        <Product
          image="/freezedchicken.jpg"
          name="Kuře celé"
          desc="mražené"
          pack="vakuum/sáček"
          code="k90"
          weight="1,5-2,9 kg"
        />
        <Product
          image="/breasts.jpg"
          name="Kuřecí prsní řízky SUPREME po 2"
          desc="chlazené"
          pack="vakuum/sáček"
          code="k116"
          weight="0,4-1,1 kg"
        />
        <Product
          image="/freezedbreasts.jpg"
          name="Kuřecí prsní řízky SUPREME po 2"
          desc="mražené"
          pack="vakuum/sáček"
          code="k116"
          weight="0,4-1,1 kg"
        />
      </div>
    </main>
  )
}
