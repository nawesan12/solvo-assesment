import ForecastBlock from "./ForecastBlock"

const fetchUniqueWeather = async (name: string) => {
  const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&key=CTHL8CX6AF99E6W3KJG9MF9JH&contentType=json`, {
    next: {
      revalidate: 1200
    }
  })
  const data = await res.json()

  return data
}

export default async function UniqueCityWeather({ params }: { params: { name: string } }) {
  const { name } = params

  const weather = await fetchUniqueWeather(name as string)

  if(weather && typeof window !== "undefined") {
    localStorage.setItem("weather-info", JSON.stringify(weather.currentConditions))
  }

  return (
    <>
    <ForecastBlock currentConditions={weather.currentConditions} cityName={weather.resolvedAddress}/>
    </>
  )
}