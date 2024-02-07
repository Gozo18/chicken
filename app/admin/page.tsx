import AdminCustomers from "@/components/AdminCustomers"
import AdminOrders from "@/components/AdminOrders"
import AdminOverview from "@/components/AdminOverview"
import AdminProducts from "@/components/AdminProducts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function admin() {
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
