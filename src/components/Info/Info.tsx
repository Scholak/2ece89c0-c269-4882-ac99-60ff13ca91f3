import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { motion, useInView } from 'framer-motion'
import { RootState } from '../../redux/store'
import { moveToLeft } from '../../animations/moveToLeft'
import { moveToTop } from '../../animations/moveToTop'
import { moveToRight } from '../../animations/moveToRight'
import styles from './Info.module.scss'
import locationIcon from '../../assets/locationIcon.png'
import thunderIcon from '../../assets/thunderIcon.png'

const Info = () => {
	const { city, type, degree } = useSelector((state: RootState) => state.weather)

	const locationRef = useRef<HTMLDivElement>(null)
	const typeRef = useRef<HTMLParagraphElement>(null)
	const degreeRef = useRef<HTMLParagraphElement>(null)
	const dateRef = useRef<HTMLParagraphElement>(null)
	const iconRef = useRef<HTMLImageElement>(null)

	const locationView = useInView(locationRef)
	const typeView = useInView(typeRef)
	const degreeView = useInView(degreeRef)
	const dateView = useInView(dateRef)
	const iconView = useInView(iconRef)

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<motion.div
					ref={locationRef}
					variants={moveToLeft}
					initial='hidden'
					transition={{ duration: 1 }}
					animate={locationView ? 'visible' : 'hidden'}
					className={styles.location}
				>
					<img src={locationIcon} alt='location icon' />
					<p>{city}</p>
				</motion.div>
				<motion.p
					ref={typeRef}
					variants={moveToLeft}
					initial='hidden'
					transition={{ duration: 1, delay: 0.1 }}
					animate={typeView ? 'visible' : 'hidden'}
					className={styles.type}
				>
					{type}
				</motion.p>
				<motion.p
					ref={degreeRef}
					variants={moveToLeft}
					initial='hidden'
					transition={{ duration: 1, delay: 0.2 }}
					animate={degreeView ? 'visible' : 'hidden'}
					className={styles.degree}
				>
					{degree} °C
				</motion.p>
			</div>
			<motion.img
				src={thunderIcon}
				alt='thunder icon'
				ref={iconRef}
				variants={moveToTop}
				initial='hidden'
				transition={{ duration: 1, delay: 0.3 }}
				animate={iconView ? 'visible' : 'hidden'}
			/>
			<motion.p
				ref={dateRef}
				variants={moveToRight}
				initial='hidden'
				transition={{ duration: 1, delay: 0.4 }}
				animate={dateView ? 'visible' : 'hidden'}
				className={styles.date}
			>
				Sunday | 12 Dec 2023
			</motion.p>
		</div>
	)
}

export default Info
