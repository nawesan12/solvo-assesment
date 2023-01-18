import GoBack from "@/components/Buttons/GoBack"
import styles from "./Forecast.module.css"

export default function Layout({ children, params }: { children: React.ReactNode, params: { name: string } }) {

  const { name } = params
  const normalizedName = name.split("%20").join(" ")
  const today = new Date().toLocaleDateString()

  return (
    <>
    <GoBack />
    <section className={styles.forecast}>
      <h2>{normalizedName}</h2> 
      <h5>{today}</h5>
      {children}
    </section>
    </>
  )
}