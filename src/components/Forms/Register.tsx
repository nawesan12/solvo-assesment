export default function RegisterForm(){
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
      <label htmlFor="repeat_password">Repeat Password</label>
      <input type="password" placeholder="Repeat Password" />

      <input type="submit" value="Log in"/>
    </form>
    </>
  )
}