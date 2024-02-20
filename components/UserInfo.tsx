import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useAppContext } from "@/context/context"

export default function UserInfo() {
  const { user, stores } = useAppContext()

  if (user) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold">
            Objednávky (3)
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-slate-100">
                <AccordionTrigger>2.1.2024 - obj. č. 2401021</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="text-left">
                      Závoz: <span className="font-semibold">3.1.2024</span>
                    </div>
                    <div className="mb-2 text-left">
                      Adresa:{" "}
                      <span className="font-semibold">České Budějovice 12</span>
                    </div>
                    <div className="flex border-b-2 py-1">
                      <div className="w-1/2 lg:w-1/3 text-left">
                        Kuře celé - chlazené
                      </div>
                      <div className="w-1/4 lg:w-1/3 text-center">10 kusů</div>
                      <div className="w-1/4 lg:w-1/3 text-right">1500,- Kč</div>
                    </div>
                    <div className="flex border-b-2 py-1">
                      <div className="w-1/2 lg:w-1/3 text-left">
                        Kuře celé - mražené
                      </div>
                      <div className="w-1/4 lg:w-1/3 text-center">10 kusů</div>
                      <div className="w-1/4 lg:w-1/3 text-right">1500,- Kč</div>
                    </div>
                    <div className="flex border-b-2 py-1">
                      <div className="w-1/2 lg:w-1/3 text-left">
                        Kuřecí prsní řízky supreme po 2
                      </div>
                      <div className="w-1/4 lg:w-1/3 text-center">10 kusů</div>
                      <div className="w-1/4 lg:w-1/3 text-right">1500,- Kč</div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <div>
                        cena celkem:{" "}
                        <span className="font-semibold">4500,- Kč</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>12.1.2024 - obj. č. 2401123</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="text-left">
                      Závoz: <span className="font-semibold">14.1.2024</span>
                    </div>
                    <div className="mb-2 text-left">
                      Adresa:{" "}
                      <span className="font-semibold">České Budějovice 12</span>
                    </div>
                    <div className="flex border-b-2 py-1">
                      <div className="w-1/2 lg:w-1/3 text-left">
                        Kuře celé - chlazené
                      </div>
                      <div className="w-1/4 lg:w-1/3 text-center">10 kusů</div>
                      <div className="w-1/4 lg:w-1/3 text-right">1500,- Kč</div>
                    </div>
                    <div className="flex border-b-2 py-1">
                      <div className="w-1/2 lg:w-1/3 text-left">
                        Kuře celé - mražené
                      </div>
                      <div className="w-1/4 lg:w-1/3 text-center">10 kusů</div>
                      <div className="w-1/4 lg:w-1/3 text-right">1500,- Kč</div>
                    </div>
                    <div className="flex border-b-2 py-1">
                      <div className="w-1/2 lg:w-1/3 text-left">
                        Kuřecí prsní řízky supreme po 2
                      </div>
                      <div className="w-1/4 lg:w-1/3 text-center">10 kusů</div>
                      <div className="w-1/4 lg:w-1/3 text-right">1500,- Kč</div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <div>
                        cena celkem:{" "}
                        <span className="font-semibold">4500,- Kč</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-slate-100">
                <AccordionTrigger>22.1.2024 - obj. č. 2401224</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="text-left">
                      Závoz: <span className="font-semibold">24.1.2024</span>
                    </div>
                    <div className="mb-2 text-left">
                      Adresa:{" "}
                      <span className="font-semibold">České Budějovice 12</span>
                    </div>
                    <div className="flex border-b-2 py-1">
                      <div className="w-1/2 lg:w-1/3 text-left">
                        Kuře celé - chlazené
                      </div>
                      <div className="w-1/4 lg:w-1/3 text-center">10 kusů</div>
                      <div className="w-1/4 lg:w-1/3 text-right">1500,- Kč</div>
                    </div>
                    <div className="flex border-b-2 py-1">
                      <div className="w-1/2 lg:w-1/3 text-left">
                        Kuře celé - mražené
                      </div>
                      <div className="w-1/4 lg:w-1/3 text-center">10 kusů</div>
                      <div className="w-1/4 lg:w-1/3 text-right">1500,- Kč</div>
                    </div>
                    <div className="flex border-b-2 py-1">
                      <div className="w-1/2 lg:w-1/3 text-left">
                        Kuřecí prsní řízky supreme po 2
                      </div>
                      <div className="w-1/4 lg:w-1/3 text-center">10 kusů</div>
                      <div className="w-1/4 lg:w-1/3 text-right">1500,- Kč</div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <div>
                        cena celkem:{" "}
                        <span className="font-semibold">4500,- Kč</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="text-left">
          <AccordionTrigger className="font-bold">
            Údaje o uživateli
          </AccordionTrigger>
          <AccordionContent>
            <div className="mb-2">Kontaktní osoba: {user.jmeno}</div>
            <div className="my-2">
              Telefon:{" "}
              <a href={"tel:" + user.telefon} className="underline">
                {user.telefon}
              </a>
            </div>
            <div className="my-2">
              E-mail:{" "}
              <a href={"mailto:" + user.email} className="underline">
                {user.email}
              </a>
            </div>
            <div>Ulice: {user.ulice}</div>
            <div>Město: {user.mesto}</div>
            <div>PSČ: {user.psc}</div>
            <div className="mt-2">IČO: {user.ico}</div>
            <div>DIČ: {user.dic}</div>
          </AccordionContent>
        </AccordionItem>
        {stores && (
          <AccordionItem value="item-3" className="text-left">
            <AccordionTrigger className="font-bold">
              Prodejny ({stores.length})
            </AccordionTrigger>
            <AccordionContent>
              {stores.map((store: any, i: number) => (
                <div key={i} className="mb-2">
                  <div className="font-semibold">Název: {store.jmeno}</div>
                  <div>Ulice: {store.ulice}</div>
                  <div>Město: {store.mesto}</div>
                  <div>PSČ: {store.psc}</div>
                  <div className="mt-2">
                    Telefon:{" "}
                    <a href={"tel:" + store.telefon} className="underline">
                      {store.telefon}
                    </a>
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    )
  }
}
