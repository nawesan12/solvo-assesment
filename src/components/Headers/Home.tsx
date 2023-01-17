import Link from "next/link"
import styles from "./HomeHeader.module.css"

export default function HomeHeader() {
  return (
    <header className={styles.home_header}>
      <h1>Solvo Weather</h1> 

      <nav>
        <ul className={styles.nav_list}>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}