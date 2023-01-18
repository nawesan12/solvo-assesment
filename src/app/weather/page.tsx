"use client"
import GoBack from "@/components/Buttons/GoBack"
import { useRef } from "react"
import { useRouter } from "next/navigation"

export default function Weather() {

  const router = useRouter()

  const cityRef = useRef<HTMLInputElement>(null)

  const searchCity = () => {
    router.push(`/weather/${cityRef.current?.value}`)
  }

  return (
    <main>
      <GoBack />
      <h3>Select a city:</h3>
      <input type="text" placeholder="Search city" ref={cityRef}/>

      <button onClick={searchCity}>
        Search
      </button>
    </main>
  )
}
