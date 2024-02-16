"use client"

import { useRouter } from "next/navigation"
import { PiArrowCircleLeftThin } from "react-icons/pi"

export default function BackLink() {
  const router = useRouter()

  return (
    <a onClick={() => router.back()} className="flex text-2xl cursor-pointer">
      <PiArrowCircleLeftThin /> <span className="ml-1 text-base">zpět</span>
    </a>
  )
}
