import GoBack from "@/components/Buttons/GoBack";

export default function FavoritesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
        <GoBack />
        <section className="page">
          <h1>My Favourites</h1>

          {children}
        </section>
    </main>
  )
}
