"use client"
import Link from "next/link"
import { useContext } from "react"
import { UserContext } from "@/context/UserContext"

export default function Page() {
  
  const { user } = useContext(UserContext)

  return (
    <>
    <section className="favorites-container">
      <ul>
        {
          user.favorites.length > 0 ? user.favorites.map((city: string, index: number) => (
            <li key={index}>
              <Link href={`/weather/${city}`}>
                {city}
              </Link>
            </li>
          )) : <p>{"You don't have any favourites!"}</p>
        }
      </ul>
    </section>
    </>
  )
}