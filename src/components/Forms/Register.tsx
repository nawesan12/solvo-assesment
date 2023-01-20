"use client"
import { useContext, useRef } from 'react'
import { localFetch } from "@/utils/fetch"
import { FormEvent } from "react"
import styles from "./Forms.module.css"
import { decode } from 'punycode'
import { UserContext } from '@/context/UserContext'
import { useRouter } from "next/navigation"

export default function RegisterForm(){

  const router = useRouter()
  const { setUser } = useContext(UserContext)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const body = {

    }

    const res = await localFetch("/api/users/register", "POST", body)

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
        name="email"  
      />

      <label htmlFor="repeat_password">Full Name:</label>
      <input 
        type="text" 
        placeholder="Full Name" />

      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        placeholder="Password"
        name="password"
      />

      <input type="submit" value="Log in"/>
    </form>
    </>
  )
}