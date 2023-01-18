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
        color: var(--secondary);
        background: var(--primary);
        padding: .4rem 1.25rem;
        border-radius: 0 0 1rem 0;
        cursor: pointer;
        font-size:1rem;
        position: fixed;
        top: 0;
        left: 0;
      }
    `}</style>
    </>
    
  )
}