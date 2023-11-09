import { useSelector } from 'react-redux'
import styles from './WeeklyForecast.module.scss'
import { RootState } from '../../redux/store'
import Forecast from './Forecast'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const WeeklyForecast = () => {
  const { weeklyWeather } = useSelector((state: RootState) => state.weather)

  return (
		<div className={styles.container}>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				navigation={{ prevEl: '.prev', nextEl: '.next' }}
				className={styles.slider}
			>
				<SwiperSlide>
					<div className={styles.sliderItem}>
						<Forecast weather={weeklyWeather.previous.sunday} />
						<Forecast weather={weeklyWeather.previous.monday} />
						<Forecast weather={weeklyWeather.previous.tuesday} />
						<Forecast weather={weeklyWeather.previous.wednesday} />
						<Forecast weather={weeklyWeather.previous.thursday} />
						<Forecast weather={weeklyWeather.previous.friday} />
						<Forecast weather={weeklyWeather.previous.saturday} />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderItem}>
						<Forecast weather={weeklyWeather.current.sunday} />
						<Forecast weather={weeklyWeather.current.monday} />
						<Forecast weather={weeklyWeather.current.tuesday} />
						<Forecast weather={weeklyWeather.current.wednesday} />
						<Forecast weather={weeklyWeather.current.thursday} />
						<Forecast weather={weeklyWeather.current.friday} />
						<Forecast weather={weeklyWeather.current.saturday} />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderItem}>
						<Forecast weather={weeklyWeather.next.sunday} />
						<Forecast weather={weeklyWeather.next.monday} />
						<Forecast weather={weeklyWeather.next.tuesday} />
						<Forecast weather={weeklyWeather.next.wednesday} />
						<Forecast weather={weeklyWeather.next.thursday} />
						<Forecast weather={weeklyWeather.next.friday} />
						<Forecast weather={weeklyWeather.next.saturday} />
					</div>
				</SwiperSlide>
				<div className='prev'>
				</div>
				<div className='next'>
				</div>
			</Swiper>
		</div>
	)
}

export default WeeklyForecast