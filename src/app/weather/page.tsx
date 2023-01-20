"use client"
import GoBack from "@/components/Buttons/GoBack"
import { FormEvent, useRef } from "react"
import { useRouter } from "next/navigation"

export default function Weather() {

  const router = useRouter()

  const cityRef = useRef<HTMLInputElement>(null)

  const searchCity = (e: FormEvent) => {
    e.preventDefault()
    router.push(`/weather/${cityRef.current?.value}`)
  }

  return (
    <main>
      <GoBack />
      <div className="search-city page">
        <h3>Select a city:</h3>
        <form onSubmit={(e) => searchCity(e)}>
          <input type="text" placeholder="Search city" ref={cityRef}/>

          <input type="submit" value="Search" />
        </form>      
      </div>
    </main>
  )
}
