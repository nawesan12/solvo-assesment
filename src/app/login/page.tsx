"use client"
import GoBack from "@/components/Buttons/GoBack";
import LoginForm from "@/components/Forms/Login";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react"
import { UserContext } from '../../context/UserContext'


export default function Login() {
  const { user } = useContext(UserContext)

  const router = useRouter()

  useEffect(() => {
    if(user.id) router.push("/weather")
  }, [])
  
  return (
    <main>
      <GoBack />
      <section className="page">
        <h2>Login</h2>
        <LoginForm />
      </section>
    </main>
  )
}
