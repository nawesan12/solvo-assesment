"use client"
import { useRef, useContext } from "react"
import { UserContext } from "@/context/UserContext"
import { localFetch } from "@/utils/fetch"
import type { FormEvent } from "react"
import styles from "./Forms.module.css"
import { decode } from "jsonwebtoken"
import { useRouter } from "next/navigation"

export default function LoginForm(){

  const router = useRouter()
  const { setUser } = useContext(UserContext)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const body = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    }

    const res = await localFetch("/api/users/login", "POST", body)

    if(res.success === false) {
      alert("error")
    }

    const userDecoded = decode(res.token)

    setUser(userDecoded)
    localStorage.setItem("weather-auth-token", res.token)

    router.push("/weather")
  }

  return (
    <>
    <form action="/api/users/login" method="POST" className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        placeholder="Email" 
        ref={emailRef}
        name="email"  
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="text" 
        placeholder="Password"
        ref={passwordRef}
        name="password"
      />

      <input type="submit" value="Log in"/>
    </form>
    </>
  )
}