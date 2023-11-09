import { useSelector } from 'react-redux'
import styles from './WeeklyForecast.module.scss'
import { RootState } from '../../redux/store'
import Forecast from './Forecast'
import { Swiper, SwiperSlide } from 'swiper/react'

const WeeklyForecast = () => {
  const { weeklyWeather } = useSelector((state: RootState) => state.weather)

  return (
		<div className={styles.container}>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
			>
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>1</SwiperSlide>
				{/* <div>
					<div className={styles.sliderItem}>
						<Forecast weather={weeklyWeather.previous.sunday} />
						<Forecast weather={weeklyWeather.previous.monday} />
						<Forecast weather={weeklyWeather.previous.tuesday} />
						<Forecast weather={weeklyWeather.previous.wednesday} />
						<Forecast weather={weeklyWeather.previous.thursday} />
						<Forecast weather={weeklyWeather.previous.friday} />
						<Forecast weather={weeklyWeather.previous.saturday} />
					</div>
				</div>
				<div>
					<div className={styles.sliderItem}>
						<Forecast weather={weeklyWeather.current.sunday} />
						<Forecast weather={weeklyWeather.current.monday} />
						<Forecast weather={weeklyWeather.current.tuesday} />
						<Forecast weather={weeklyWeather.current.wednesday} />
						<Forecast weather={weeklyWeather.current.thursday} />
						<Forecast weather={weeklyWeather.current.friday} />
						<Forecast weather={weeklyWeather.current.saturday} />
					</div>
				</div> */}
				{/* <div>
					<div className={styles.sliderItem}>
						<Forecast weather={weeklyWeather.next.sunday} />
						<Forecast weather={weeklyWeather.next.monday} />
						<Forecast weather={weeklyWeather.next.tuesday} />
						<Forecast weather={weeklyWeather.next.wednesday} />
						<Forecast weather={weeklyWeather.next.thursday} />
						<Forecast weather={weeklyWeather.next.friday} />
						<Forecast weather={weeklyWeather.next.saturday} />
					</div>
				</div> */}
			</Swiper>
		</div>
	)
}

export default WeeklyForecast