const fetchFavorites = async (userId) => {
  const userRes = await fetch()  
  const user = await userRes.json()

  
}

export default async function Page() {

  const userFavorites = await fetchFavorites()

  return (
    <>
    <section className="favorites-container">
      <ul>
        {
          user.favorites.map((e, index) => (
            <li key={index}>
              {e.name}
            </li>
          ))
        }
      </ul>
    </section>
    </>
  )
}