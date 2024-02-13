import AdminCustomers from "@/components/AdminCustomers"
import AdminOrders from "@/components/AdminOrders"
import AdminOverview from "@/components/AdminOverview"
import AdminProducts from "@/components/AdminProducts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/* const fs = require("fs") */

export default /* async */ function admin() {
  /* let url = "http://localhost:3000/csvjson.json"
  let response = await fetch(url)

  if (response.ok) {
    let json = await response.json()
    let filterUsers: any = []
    json.map((user: any) => {
      const {
        titul,
        jmeno,
        prijmeni,
        nazev,
        adresa,
        mesto,
        psc,
        telefon,
        email,
        spolecnost,
        ico,
        dic,
        f_ulice,
        f_mesto,
        f_psc,
        f_email,
        pocet_obchodu,
        adresa_cp,
        f_ulice_cp,
        voc_ceny_hladina,
        pocet_dni_splatnosti,
      } = user
      filterUsers.push({
        titul,
        jmeno,
        prijmeni,
        nazev,
        adresa,
        mesto,
        psc,
        telefon,
        email,
        spolecnost,
        ico,
        dic,
        f_ulice,
        f_mesto,
        f_psc,
        f_email,
        pocet_obchodu,
        adresa_cp,
        f_ulice_cp,
        voc_ceny_hladina,
        pocet_dni_splatnosti,
      })
    })
    console.log(filterUsers)
    // Convert the array to JSON format
    const jsonData = JSON.stringify(filterUsers, null, 2)

    // Write JSON data to a file
    fs.writeFile("data.json", jsonData, "utf8", (err: any) => {
      if (err) {
        console.error("Error writing JSON file:", err)
      } else {
        console.log("JSON file has been saved.")
      }
    })
  } else {
    alert("HTTP-Error: " + response.status)
  } */

  return (
    <main className="mt-20 lg:mt-32 px-2 sm:px-4 md:px-8 xl:px-24">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full h-auto p-2 text-xl bg-background border flex justify-start flex-wrap">
          <TabsTrigger value="overview" className="text-lg">
            Přehled
          </TabsTrigger>
          <TabsTrigger value="orders" className="text-lg">
            Objednávky
          </TabsTrigger>
          <TabsTrigger value="customers" className="text-lg">
            Zákazníci
          </TabsTrigger>
          <TabsTrigger value="products" className="text-lg">
            Produkty
          </TabsTrigger>
          <TabsTrigger value="production" className="text-lg">
            Výroba
          </TabsTrigger>
          <TabsTrigger value="delivery" className="text-lg">
            Rozvozy
          </TabsTrigger>
          <TabsTrigger value="settings" className="text-lg">
            Nastavení
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <AdminOverview />
        </TabsContent>
        <TabsContent value="orders">
          <AdminOrders />
        </TabsContent>
        <TabsContent value="customers">
          <AdminCustomers />
        </TabsContent>
        <TabsContent value="products">
          <AdminProducts />
        </TabsContent>
        <TabsContent value="production">
          <h2>Výroba</h2>
          <p>Plánování výroby pro dva nejbližší termíny rozvoz.</p>
        </TabsContent>
        <TabsContent value="delivery">
          <h2>Rozvozy</h2>
          <p>Dva nejbližší termíny rozvozu.</p>
        </TabsContent>
        <TabsContent value="settings">
          <h2>Nastavení</h2>
          <p>Nastavení cenových úrovní pro zákazníky.</p>
        </TabsContent>
      </Tabs>
    </main>
  )
}
