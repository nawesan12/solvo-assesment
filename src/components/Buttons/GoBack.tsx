"use client"
import { useRouter } from "next/navigation"

export default function GoBack() {

  const router = useRouter()

  const backInHistory = () => {
    router.back()
  }

  return (
    <>
    <button onClick={backInHistory}>
      &larr; Back
    </button>

    <style jsx>{`
      button {
        all: unset;
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
        padding: .4rem 1rem;
        cursor: pointer;
        font-size:1rem;
        position: fixed;
        top: 0;
        left: 0;
        transition: all .2s ease;
      }

      button:hover {
        border-radius: 0 0 .75rem 0;
        filter: brightness(1.2)
      }
    `}</style>
    </>
    
  )
}