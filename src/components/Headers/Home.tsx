import Image from "next/image"
import Link from "next/link"
import styles from "./HomeHeader.module.css"

export default function HomeHeader() {
  return (
    <header className={styles.home_header}>
      <Link href="/">
        <Image src="/logo.webp" alt="Solvo Weather App" width={50} height={50} />
      </Link>

      <nav>
        <ul className={styles.nav_list}>
          <li className={styles.login}>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/thanks">Thanks</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}