import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Farma Loužná - kontakty",
  description: "Farma Loužná - prodej kuřecího masa",
}

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
