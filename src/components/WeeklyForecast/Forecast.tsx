import { IPreparedWeeklyWeatherType } from '../../types/weatherType'
import { generateWeatherIcon } from '../../utils/generateWeatherIcon'
import styles from './WeeklyForecast.module.scss'

interface IForecastProps {
	weather: IPreparedWeeklyWeatherType
}

const Forecast = ({ weather }: IForecastProps) => {
  return (
		<div className={styles.forecast}>
			<p className={styles.day}>{weather.day}</p>
			<div dangerouslySetInnerHTML={{ __html: generateWeatherIcon(weather.type) }}></div>
			<p className={styles.degree}>{weather.degree}°</p>
		</div>
	)
}

export default Forecast