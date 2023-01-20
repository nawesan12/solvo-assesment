import SetFavoriteBtn from "@/components/Buttons/SetFavoriteBtn"
import Image from "next/image"
import styles from "./Forecast.module.css"

export default function ForecastBlock({ currentConditions, cityName }: any) {

  const  { 
    temp, 
    icon,
    datetime,
    feelslike,
    dew, 
    humidity,
    windspeed,
    pressure,
    visibility,
    uvindex,
    sunrise,
    sunset,
    conditions
  } = currentConditions

  console.log(conditions)

  return (
    <section className={styles.forecast_block}>
      {/* fav button */}
      <SetFavoriteBtn city={cityName} />

      <div className={styles.weather_icon}>
        <figure className={styles.icon}>
          <Image src={`/weather-icons/${icon}.webp`} alt="" height={128} width={128} />  
          <figcaption>{conditions}</figcaption>
        </figure>
      </div>
      
      <div className={styles.main_info}>
        <p>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
            <line x1="10" y1="9" x2="14" y2="9" />
          </svg>
          <b>Temperature:</b> {temp}° C
        </p>
        <p>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="2" />
            <path d="M3 12h4m5 -9v4m5 5h4m-9 5v4m-4.5 -13.5l1 1m8 -1l-1 1m0 7l1 1m-8 -1l-1 1" />
          </svg>  
          <b>Feels like:</b> {feelslike}° C
        </p>
        <p>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
            <path d="M12 3v17" />
            <path d="M12 12l3.544 -3.544" />
            <path d="M12 17.3l5.558 -5.558" />
          </svg>
          <b>Humidity:</b> {humidity}%
        </p>
        <p>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
            <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
            <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
          </svg>
          <b>Wind speed:</b> {windspeed}km/h
        </p>
      </div>
    
      <div className={styles.weather_misc}>
        <p>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
            <path d="M6 14h12" />
            <path d="M7.305 17.695l3.695 -3.695" />
            <path d="M10.26 19.74l5.74 -5.74l-5.74 5.74z" />
          </svg>
          <b>Dew:</b>{dew} ° C
        </p>
        <p>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 5h3m4 0h9" />
            <path d="M3 10h11m4 0h1" />
            <path d="M5 15h5m4 0h7" />
            <path d="M3 20h9m4 0h3" />
          </svg>
          <b>Pressure:</b>{pressure} hPa
        </p>
        <p>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="2" />
            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
          </svg>
          <b>Visibility:</b>{visibility} km
        </p>
        <p>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
          </svg>
          <b>UV Index:</b>{uvindex}
        </p>
        <p>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
            <line x1="3" y1="21" x2="21" y2="21" />
            <path d="M12 9v-6l3 3m-6 0l3 -3" />
          </svg>
          <b>Sunrise:</b>{sunrise} hs
        </p>
        <p>
          <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
            <line x1="3" y1="21" x2="21" y2="21" />
            <path d="M12 3v6l3 -3m-6 0l3 3" />
          </svg>
          <b>Sunset:</b>{sunset} hs
        </p>
      </div>
    </section>
  )
}