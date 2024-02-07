import AdminChart from "./AdminChart"
import AdminTable from "./AdminTable"

export default function AdminOverview() {
  return (
    <section className="w-full my-4 p-2 border rounded-md">
      <h2 className="text-2xl font-semibold text-center">Přehled</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 my-2">
        <div className="flex flex-col items-center mb-2 lg:mb-0 p-2 border rounded-md">
          <h3 className="text-lg font-semibold">Prodej tento měsíc</h3>
          <p className="text-2xl">250.000,- Kč</p>
          <p className="text-sm opacity-85">+10% oproti minulému měsíci</p>
        </div>
        <div className="flex flex-col items-center mb-2 lg:mb-0 p-2 border rounded-md">
          <h3 className="text-lg font-semibold">Prodej tento týden</h3>
          <p className="text-2xl">75.000,- Kč</p>
          <p className="text-sm opacity-85">+5% oproti minulému týdnu</p>
        </div>
        <div className="flex flex-col items-center mb-2 lg:mb-0 p-2 border rounded-md">
          <h3 className="text-lg font-semibold">Prodej tento den</h3>
          <p className="text-2xl">25.000,- Kč</p>
          <p className="text-sm opacity-85">+8% oproti minulému dni</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
        <div className="p-2 border rounded-md">
          <h3 className="mb-2 text-lg font-semibold text-center">
            Týdenní přehled objednávek
          </h3>
          <div className="w-full h-72 lg:h-96">
            <AdminChart />
          </div>
        </div>
        <div className="mt-2 lg:mb-0 p-2 border rounded-md">
          <h3 className="mb-2 text-lg font-semibold text-center">
            Aktuální objednávky
          </h3>
          <div className="w-full h-96">
            <AdminTable />
          </div>
        </div>
      </div>
    </section>
  )
}
