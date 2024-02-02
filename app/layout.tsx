import type { Metadata } from "next"
import { Roboto as FontSans } from "next/font/google"
import "../styles/globals.css"
import { cn } from "../lib/utils"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const fontSans = FontSans({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Farma Loužná",
  description: "Farma Loužná - prodej kuřecího masa",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
