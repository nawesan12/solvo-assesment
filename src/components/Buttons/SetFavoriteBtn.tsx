"use client"
import { localFetch } from "@/utils/fetch"
import { useContext, useState } from "react"
import { UserContext } from "@/context/UserContext"

export default function SetFavoriteBtn({ city }: { city: string }) {
  const [selected, setSelected] = useState(false)
  const { user } = useContext(UserContext)

  const toggleFavorite = async () => {
    setSelected(!selected)

    const body = {
      id: user.id,
      favorites: user.favorites
    }

    if (!user.favorites.includes(city)) {
      user.favorites.push(city)
      localStorage.setItem('user', JSON.stringify(user))
      const res = await localFetch("/api/users/set-favorites", "PUT", body)

      console.log(res)
      return
    }

    const cityInFavorites = user.favorites.indexOf(city)
    user.favorites.splice(cityInFavorites, 1)
    localStorage.setItem('user', JSON.stringify(user))
    const res = await localFetch("/api/users/set-favorites", "PUT", body)
    console.log(res)
    return
  }

  return (
    <>
      <button title="Set as favorite" onClick={toggleFavorite}>
        <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke={selected ? "#ffbb00" : "#000000"} fill={selected ? "#fb0" : "none"} stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
      </button>

      <style jsx>{`
      @keyframes scaleUp {
        from { transform: scale(1) }
        50% { transform: scale(1.1) }
        to { transform: scale(1) }
      }
      button {
        all: unset;
        position:absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
      }  
      .selected {
        animation: scaleUp 1s linear;
      }
    `}</style>
    </>
  )
}