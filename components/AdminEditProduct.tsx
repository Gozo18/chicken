"use client"

import { ProductType } from "@/lib/types"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { PiPencilSimpleThin } from "react-icons/pi"
import AdminProducImageEdit from "./AdminProducImageEdit"

const formSchema = z.object({
  nazev: z.string().min(2).max(40),
  kod: z.string().min(2).max(3),
  bezDPH: z.number().min(1).max(999),
  akce: z.boolean(),
  akceCena: z.number().min(1).max(999),
  DPH: z.number().min(0).max(99),
  dostupnost: z.string().min(2).max(40),
  stav: z.string().min(2).max(40),
  hmotnost: z.string().min(2).max(40),
  obal: z.string().min(2).max(40),
  obraz: z.string().min(2).max(40),
  zobrazit: z.boolean(),
})

export default function AdminEditProduct(item: ProductType) {
  const {
    DPH,
    akce,
    akceCena,
    bezDPH,
    dostupnost,
    hmotnost,
    kod,
    nazev,
    obal,
    obraz,
    stav,
    zobrazit,
  } = item.item

  let pic: string
  if (obraz != undefined) {
    pic = obraz
  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nazev,
      kod,
      bezDPH,
      akce,
      akceCena,
      DPH,
      dostupnost,
      stav,
      hmotnost,
      obal,
      obraz,
      zobrazit,
    },
  })

  /* console.log(form) */

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex text-lg cursor-pointer justify-end ml-4 hover:underline">
          <PiPencilSimpleThin />
          <span className="ml-1 text-sm">upravit</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upravit</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              <FormField
                control={form.control}
                name="nazev"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 mr-2 w-32">Název</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Název"
                        {...field}
                        tabIndex={-1}
                        className="mr-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="kod"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 mr-2 w-32">Kód</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Kód"
                        {...field}
                        tabIndex={-1}
                        className="mr-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bezDPH"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 mr-2 w-32">
                      Cena bez DPH
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Cena bez DPH"
                        {...field}
                        tabIndex={-1}
                        className="mr-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="akce"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 w-24">Akce</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        tabIndex={-1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="akceCena"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 mr-2 w-32">Akční cena</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Akční cena"
                        {...field}
                        tabIndex={-1}
                        className="mr-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="DPH"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 mr-2 w-32">
                      DPH produktu
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="DPH produktu"
                        {...field}
                        tabIndex={-1}
                        className="mr-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dostupnost"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 mr-2 w-32">Dostupnost</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger tabIndex={-1} className="mr-1">
                          <SelectValue placeholder="Vyberte z možností" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Ihned k odběru">
                          Ihned k odběru
                        </SelectItem>
                        <SelectItem value="Nedostupné">Nedostupné</SelectItem>
                        <SelectItem value="Skladem do týdne">
                          Skladem do týdne
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stav"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 mr-2 w-32">Stav</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger tabIndex={-1} className="mr-1">
                          <SelectValue placeholder="Vyberte z možností" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="mrazené">mrazené</SelectItem>
                        <SelectItem value="chlazené">chlazené</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hmotnost"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 mr-2 w-32">Hmotnost</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Hmotnost"
                        {...field}
                        tabIndex={-1}
                        className="mr-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="obal"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 mr-2 w-32">Obal</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Obal"
                        {...field}
                        tabIndex={-1}
                        className="mr-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="obraz"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 w-28">Obrázek</FormLabel>
                    <FormControl>
                      {/* <Input
                        placeholder="Obrázek"
                        {...field}
                        tabIndex={-1}
                        className="mr-1"
                      /> */}
                      <AdminProducImageEdit pic={pic} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zobrazit"
                render={({ field }) => (
                  <FormItem className="flex items-center my-2">
                    <FormLabel className="mt-2 w-24">Zobrazit</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        tabIndex={-1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </ScrollArea>
            <Button type="submit" className="float-right">
              Uložit změny
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
