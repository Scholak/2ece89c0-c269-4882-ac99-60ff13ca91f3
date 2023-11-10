import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { RootState } from '../../redux/store'
import { prepareWeeklyWeather } from '../../utils/prepareWeeklyWeather'
import Forecast from './Forecast'
import styles from './WeeklyForecast.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'

const WeeklyForecast = () => {
  const { weeklyWeather } = useSelector((state: RootState) => state.weather)

  return (
		<div className={styles.container}>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				initialSlide={1}
				className={styles.slider}
				modules={[Navigation]}
				navigation
			>
				<SwiperSlide>
					<div className={styles.sliderItem}>
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.previous.sunday, 'sunday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.previous.monday, 'monday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.previous.tuesday, 'tuesday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.previous.wednesday, 'wednesday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.previous.thursday, 'thursday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.previous.friday, 'friday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.previous.saturday, 'saturday')} />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderItem}>
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.current.sunday, 'sunday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.current.monday, 'monday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.current.tuesday, 'tuesday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.current.wednesday, 'wednesday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.current.thursday, 'thursday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.current.friday, 'friday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.current.saturday, 'saturday')} />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderItem}>
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.next.sunday, 'sunday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.next.monday, 'monday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.next.tuesday, 'tuesday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.next.wednesday, 'wednesday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.next.thursday, 'thursday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.next.friday, 'friday')} />
						<Forecast weather={prepareWeeklyWeather(weeklyWeather.next.saturday, 'saturday')} />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default WeeklyForecast