"use client"
import Link from "next/link"

export default function GoFavorites() {
  return (
    <>
    <div className="go-favorites-btn">
      <Link href="/favorites">
        My Favourites
      </Link>
    </div>

    <style jsx>{`
      .go-favorites-btn {
        padding: 1rem;
        font-weight: 500;
        position: fixed;
        top: 0;
        right: 0;
        background: #000;
        color: #fff;
        border-radius: 0 0 0 1rem;
      }  
    `}</style>
    </>
  )
}