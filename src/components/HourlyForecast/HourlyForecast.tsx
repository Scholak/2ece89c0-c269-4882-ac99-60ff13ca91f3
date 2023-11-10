import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LabelList, Line, LineChart, ResponsiveContainer } from 'recharts'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { DegreeLabel, HourLabel, WeatherLabel, WindLabel } from './Labels'
import { moveToTop } from '../../animations/moveToTop'
import { generateWeatherIcon } from '../../utils/generateWeatherIcon'
import styles from './HourlyForecast.module.scss'
import logo from '../../assets/logoLong.png'

const HourlyForecast = () => {
	const { forecast } = useSelector((state: RootState) => state.weather)

	const logoRef = useRef<HTMLImageElement>(null)

	const logoView = useInView(logoRef)

	const data = [
		{
			pv: 100,
			degree: `${forecast['08:00']}°`,
			icon: generateWeatherIcon('night cloudy'),
			wind: '11.7km/h',
			hour: '08:00',
		},
		{
			pv: 85,
			degree: `${forecast['12:00']}°`,
			icon: generateWeatherIcon('night'),
			wind: '11.7km/h',
			hour: '12:00',
		},
		{
			pv: 60,
			degree: `${forecast['15:00']}°`,
			icon: generateWeatherIcon('night thunder'),
			wind: '11.7km/h',
			hour: '15:00',
		},
		{
			pv: 70,
			degree: `${forecast['18:00']}°`,
			icon: generateWeatherIcon('night thunder'),
			wind: '11.7km/h',
			hour: '18:00',
		},
		{
			pv: 60,
			degree: `${forecast['21:00']}°`,
			icon: generateWeatherIcon('night thunder'),
			wind: '11.7km/h',
			hour: '21:00',
		},
		{
			pv: 68,
			degree: `${forecast['21:00']}°`,
			icon: generateWeatherIcon('night thunder'),
			wind: '11.7km/h',
			hour: '21:00',
		},
		{
			pv: 80,
			degree: `${forecast['00:00']}°`,
			icon: generateWeatherIcon('night thunder'),
			wind: '11.7km/h',
			hour: '00:00',
		},
	]

	return (
		<div className={styles.container}>
			<motion.img
				src={logo}
				alt='logo'
				ref={logoRef}
				variants={moveToTop}
				initial='hidden'
				transition={{ duration: 1, delay: 0.4 }}
				animate={logoView ? 'visible' : 'hidden'}
				className={styles.logo}
			/>
			<div className={styles.content}>
				<div className={styles.title}>
					<svg xmlns='http://www.w3.org/2000/svg' width='30' height='25' viewBox='0 0 30 25' fill='none'>
						<path
							d='M15.2213 0.168335C7.05742 0.168335 0.442505 5.72561 0.442505 12.5842C0.442505 19.4427 7.05742 25 15.2213 25C23.3851 25 30 19.4427 30 12.5842C30 5.72561 23.3851 0.168335 15.2213 0.168335ZM16.4291 13.5989H8.40029V12.5842H15.2213V4.94366H16.4291V13.5989Z'
							fill='white'
						/>
					</svg>
					<p className={styles.titleText}>Hourly Forecast</p>
				</div>
				<div className={styles.graph}>
					<ResponsiveContainer width='100%' height='100%'>
						<LineChart width={300} height={100} data={data} margin={{ top: 30, bottom: 0, left: 20, right: 20 }}>
							<Line type='bump' dataKey='pv' stroke='#ffffff' dot={false}>
								<LabelList content={<DegreeLabel />} dataKey='degree' />
								<LabelList content={<WeatherLabel />} dataKey='icon' />
								<LabelList content={<WindLabel />} dataKey='wind' />
								<LabelList content={<HourLabel />} dataKey='hour' />
							</Line>
							<LabelList dataKey='y' position='center' rotate={90} overflow='visible' />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	)
}

export default HourlyForecast
