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
    <>
    <main>
      <GoBack />
      <div className="search-city page">
        <h3>Select a city:</h3>
        <form onSubmit={(e) => searchCity(e)}>
          <input type="text" placeholder="Search city" ref={cityRef}/>

          <input type="submit" value="🔍︎" />
        </form>      
      </div>
    </main>

    <style jsx>{`
      input[type="text"] {
        all: unset;
        padding:.5rem;
        border-radius: 0 .5rem;
        border-bottom: 1px solid var(--primary);
        width: min(90vw, 600px);
        font-weight: 500;
      }  

      input[type="submit"] {
        all:unset;
        padding:.5rem .65rem;
        border-radius: 0 50% 50% 0;
        background: var(--primary);
        color: var(--secondary);
        cursor:pointer;
        font-weight: 500;
      }
    `}</style>
    </>
  )
}
