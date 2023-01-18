import type { FormEvent } from "react"

export default function LoginForm(){
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
    <form action="/api/users/login">
      <label htmlFor="email">Email</label>
      <input 
        type="text" 
        placeholder="Email" 
        name="email"  
      />
      <label htmlFor="password">Password</label>
      <input 
        type="text" 
        placeholder="Password"
        name="password"
      />

      <input type="submit" value="Log in"/>
    </form>
    </>
  )
}