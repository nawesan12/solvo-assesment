import styles from "./HomeHero.module.css"

export default function HomeHero() {
  return (
    <>
    <section className={styles.home_hero}>
      <h2 className={styles.subtitle}>
        The solvo weather app. <br /> 
        The forecast you can trust <br />
        <span>24/7/365</span> 
      </h2>
    </section>
    </>
  )
} 