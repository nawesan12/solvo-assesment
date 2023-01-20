import GoBack from "@/components/Buttons/GoBack";
import RegisterForm from "@/components/Forms/Register";

export default function Register() {
  return (
    <main>
      <GoBack />
      <section className="page">
        <h2>Register</h2>
        <RegisterForm />
      </section>
    </main>
  )
}
