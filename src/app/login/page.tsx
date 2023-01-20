import GoBack from "@/components/Buttons/GoBack";
import LoginForm from "@/components/Forms/Login";

export default function Login() {
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
