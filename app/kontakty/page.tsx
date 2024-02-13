export default function Contacts() {
  return (
    <main className="mt-20 lg:mt-32 px-2 sm:px-4 md:px-8 xl:px-24">
      <h1 className="mb-2 lg:mb-4 text-center font-semibold text-xl">
        Farma Loužná - kontakty
      </h1>
      <div className="flex flex-col items-center">
        <p className="mb-2">Farma Loužná s.r.o.</p>
        <p>Loužná 51</p>
        <p className="mb-4">341 01 Myslív</p>
        <p>IČ: 290 94 577</p>
        <p className="mb-4">DIČ: CZ29094577</p>
        <p className="mb-4">
          E-mail:{" "}
          <a href="mailto:info@farmalouzna.cz" className="underline">
            info@farmalouzna.cz
          </a>
        </p>
        <p className="mb-12">
          Telefon:{" "}
          <a href="tel:+420724310428" className="underline">
            +420 724 310 428
          </a>
        </p>
      </div>
      <div className="w-full h-96">
        <iframe
          style={{ border: "none" }}
          src="https://frame.mapy.cz/s/hecavanovo"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </main>
  )
}
