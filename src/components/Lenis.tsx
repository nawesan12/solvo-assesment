"use client"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function LenisContainer({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2 as number,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) as number,
      direction: 'vertical' as 'vertical', // vertical, horizontal
      gestureDirection: 'vertical' as 'vertical', // vertical, horizontal, both
      smooth: true as boolean,
      mouseMultiplier: 1 as number,
      smoothTouch: false as boolean,
      touchMultiplier: 2 as number,
      infinite: false as boolean,
    })
    
    //get scroll value
    // lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }: { scroll: number,  }) => {
    //   console.log({ scroll, limit, velocity, direction, progress })
    // })
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      {children}
    </>
  )
}