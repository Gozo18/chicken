export type UserData = {
  dic?: string
  email?: string
  ico?: string
  mesto?: string
  name?: string
  psc?: string
  telefon?: string
  ulice?: string
  jmeno?: string
  blok?: boolean
  faktura?: boolean
}

export type StoreData = [
  {
    mesto?: string
    psc?: string
    telefon?: string
    ulice?: string
    jmeno?: string
  }
]

export type ProductsData = [ProductData]

export type ProductData = {
  DPH: number
  akce: boolean
  akceCena: number
  bezDPH: number
  dostupnost: string
  hmotnost: string
  kod: string
  nazev: string
  obal: string
  obraz: string
  stav: string
  zobrazit: boolean
}

export type ProductType = {
  item: {
    DPH?: number
    akce?: boolean
    akceCena?: number
    bezDPH?: number
    dostupnost?: string
    hmotnost?: string
    kod?: string
    nazev?: string
    obal?: string
    obraz?: string
    stav?: string
    zobrazit?: boolean
  }
}
