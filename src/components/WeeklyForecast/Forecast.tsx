import { generateWeatherIcon } from '../../utils/generateWeatherIcon'
import styles from './WeeklyForecast.module.scss'

interface IForecastProps {
	weather: any
}

const Forecast = ({ weather }: IForecastProps) => {
  return (
		<div className={styles.forecast}>
			<p className={styles.day}>Sunday</p>
			{/* <div dangerouslySetInnerHTML={{ __html: generateWeatherIcon(weather.type) }}></div> */}
		</div>
	)
}

export default Forecast