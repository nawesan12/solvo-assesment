export const localFetch = async (path: string, method: string, body: any | undefined) => {
  const res = await fetch(`http://localhost:3000${path}`, {
    method: method ? method : "GET",
    body: body ? JSON.stringify(body) : ""
  })
  const data = await res.json()

  return data
}