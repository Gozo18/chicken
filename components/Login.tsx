"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { PiUser, PiEyeLight } from "react-icons/pi"

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData
  const { toast } = useToast()

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        toast({
          variant: "secondary",
          title: "Přihlášeno!",
          description: "Jste přihlášeni.",
        })
        router.push("/eshop")
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Špatné přihlašovací údaje!",
          description: "Prosím, zkuste to znovu.",
        })
      })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col items-center ml-2 lg:ml-6 mr-3 md:mr-0 cursor-pointer">
          <PiUser />
          <span className="text-xs opacity-80">Přihlásit se</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Přihlásit se</DialogTitle>
          <DialogDescription>
            Přihlášení pro partnery. Pokud máte zájem o spolupráci, tak nás
            kontaktujte zde:{" "}
            <a href="mailto:info@farmalouzna.cz" className="underline">
              info@farmalouzna.cz
            </a>
            .
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                E-mail
              </Label>
              <Input
                id="email"
                className="col-span-3"
                placeholder="E-mail"
                onChange={onChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Heslo
              </Label>
              <div className="relative col-span-3">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Heslo"
                  onChange={onChange}
                />
                <PiEyeLight
                  className="absolute top-2 right-3 cursor-pointer text-2xl opacity-70"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Přihlásit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
