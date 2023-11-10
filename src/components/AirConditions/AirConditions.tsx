import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { motion, useInView } from 'framer-motion'
import { moveToTop } from '../../animations/moveToTop'
import { moveToLeft } from '../../animations/moveToLeft'
import { moveToRight } from '../../animations/moveToRight'
import styles from './AirConditions.module.scss'
import mountain from '../../assets/mountain.png'
import windIcon from '../../assets/windIcon.png'

const AirConditions = () => {
	const airConditions = useSelector((state: RootState) => state.weather.airConditions).split('::')

	const timeRef = useRef<HTMLDivElement>(null)
	const titleRef = useRef<HTMLParagraphElement>(null)
	const infoOneRef = useRef<HTMLDivElement>(null)
	const infoTwoRef = useRef<HTMLDivElement>(null)
	const infoThreeRef = useRef<HTMLDivElement>(null)
	const infoFourRef = useRef<HTMLDivElement>(null)

	const timeView = useInView(timeRef)
	const titleView = useInView(titleRef)
	const infoOneView = useInView(infoOneRef)
	const infoTwoView = useInView(infoTwoRef)
	const infoThreeView = useInView(infoThreeRef)
	const infoFourView = useInView(infoFourRef)

	return (
		<div className={styles.container}>
			<img src={mountain} alt='mountain image' className={styles.bg} />
			<motion.div
				ref={timeRef}
				variants={moveToTop}
				initial='hidden'
				transition={{ duration: 1, delay: 0.6 }}
				animate={timeView ? 'visible' : 'hidden'}
				className={styles.time}
			>
				<svg xmlns='http://www.w3.org/2000/svg' width='59' height='60' viewBox='0 0 59 60' fill='none'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M50.4016 29.5912C50.4016 18.0151 41.0452 8.63082 29.5035 8.63082C17.9618 8.63082 8.60548 18.0151 8.60548 29.5912C8.60548 41.1673 17.9618 50.5516 29.5035 50.5516C41.0452 50.5516 50.4016 41.1673 50.4016 29.5912ZM27.6596 17.2616C27.6596 16.2402 28.4851 15.4121 29.5035 15.4121C30.5219 15.4121 31.3475 16.2402 31.3475 17.2616V29.5912C31.3475 30.2289 31.0199 30.8216 30.4808 31.1596L23.105 35.7832C22.2414 36.3245 21.1038 36.0612 20.5641 35.1951C20.0243 34.3289 20.2869 33.1879 21.1504 32.6465L27.6596 28.5662V17.2616Z'
						fill='white'
					/>
				</svg>
				<p>8:00PM GMT</p>
			</motion.div>
			<motion.p
				ref={titleRef}
				variants={moveToTop}
				initial='hidden'
				transition={{ duration: 1, delay: 0.7 }}
				animate={titleView ? 'visible' : 'hidden'}
				className={styles.title}
			>
				AIR CONDITIONS
			</motion.p>
			<div className={styles.information}>
				<motion.div
					ref={infoOneRef}
					variants={moveToLeft}
					initial='hidden'
					transition={{ duration: 1, delay: 0.75 }}
					animate={infoOneView ? 'visible' : 'hidden'}
					className={styles.informationSingle}
				>
					<svg xmlns='http://www.w3.org/2000/svg' width='55' height='65' viewBox='0 0 55 65' fill='none'>
						<path
							d='M11.7857 11.8184C11.7857 8.68398 13.4413 5.67792 16.3883 3.46153C19.3353 1.24515 23.3323 0 27.5 0C31.6677 0 35.6647 1.24515 38.6117 3.46153C41.5587 5.67792 43.2143 8.68398 43.2143 11.8184V27.3449C48.0189 29.8609 51.6304 33.4646 53.5232 37.6312C55.4159 41.7979 55.4912 46.3101 53.738 50.5112C51.9848 54.7123 48.4947 58.3829 43.7755 60.9888C39.0564 63.5948 33.3546 65 27.5 65C21.6454 65 15.9436 63.5948 11.2245 60.9888C6.50533 58.3829 3.01517 54.7123 1.26198 50.5112C-0.49122 46.3101 -0.415946 41.7979 1.47684 37.6312C3.36963 33.4646 6.98113 29.8609 11.7857 27.3449V11.8184ZM16.28 32.1904C12.8471 33.9871 10.2663 36.5609 8.91336 39.5372C7.56039 42.5136 7.50587 45.7369 8.75773 48.7382C10.0096 51.7394 12.5025 54.3618 15.8735 56.2236C19.2445 58.0853 23.3177 59.0893 27.5 59.0893C31.6823 59.0893 35.7555 58.0853 39.1265 56.2236C42.4975 54.3618 44.9904 51.7394 46.2423 48.7382C47.4941 45.7369 47.4396 42.5136 46.0866 39.5372C44.7337 36.5609 42.1529 33.9871 38.72 32.1904L35.3571 30.4265V11.8184C35.3571 10.2512 34.5293 8.74817 33.0558 7.63998C31.5823 6.53178 29.5838 5.90921 27.5 5.90921C25.4162 5.90921 23.4177 6.53178 21.9442 7.63998C20.4707 8.74817 19.6429 10.2512 19.6429 11.8184V30.4265L16.28 32.1904ZM23.5714 32.8729V11.8184H31.4286V32.8729C35.1233 33.599 38.3405 35.3116 40.4792 37.6909C42.618 40.0703 43.5321 42.9538 43.051 45.8029C42.5699 48.6521 40.7264 51.2722 37.8647 53.1739C35.003 55.0757 31.3188 56.1291 27.5 56.1375C23.6725 56.1403 19.9753 55.0925 17.1021 53.1906C14.229 51.2888 12.3776 48.6637 11.8954 45.8081C11.4132 42.9524 12.3333 40.0626 14.4831 37.681C16.6329 35.2994 19.8645 33.5897 23.5714 32.8729ZM27.5 50.2283C29.5838 50.2283 31.5823 49.6057 33.0558 48.4975C34.5293 47.3893 35.3571 45.8863 35.3571 44.3191C35.3571 42.7518 34.5293 41.2488 33.0558 40.1406C31.5823 39.0324 29.5838 38.4099 27.5 38.4099C25.4162 38.4099 23.4177 39.0324 21.9442 40.1406C20.4707 41.2488 19.6429 42.7518 19.6429 44.3191C19.6429 45.8863 20.4707 47.3893 21.9442 48.4975C23.4177 49.6057 25.4162 50.2283 27.5 50.2283Z'
							fill='white'
						/>
					</svg>
					<div className={styles.conditionText}>
						<p>Real Feel</p>
						<p>{airConditions[0]}°</p>
					</div>
				</motion.div>
				<motion.div
					ref={infoTwoRef}
					variants={moveToRight}
					initial='hidden'
					transition={{ duration: 1, delay: 0.75 }}
					animate={infoTwoView ? 'visible' : 'hidden'}
					className={styles.informationSingle}
				>
					<img src={windIcon} alt='wind icon' />
					<div className={styles.conditionText}>
						<p>Wind</p>
						<p>{airConditions[2]} km/hr</p>
					</div>
				</motion.div>
				<motion.div
					ref={infoThreeRef}
					variants={moveToLeft}
					initial='hidden'
					transition={{ duration: 1, delay: 0.85 }}
					animate={infoThreeView ? 'visible' : 'hidden'}
					className={styles.informationSingle}
				>
					<svg xmlns='http://www.w3.org/2000/svg' width='60' height='55' viewBox='0 0 60 55' fill='none'>
						<path
							d='M31.6117 5.06855L29.9867 3.80145L28.3617 5.06855C27.4867 5.65684 9.98666 19.4591 9.98666 31.6775C9.98666 36.4783 12.0938 41.0824 15.8445 44.4771C19.5953 47.8717 24.6823 49.7788 29.9867 49.7788C35.291 49.7788 40.3781 47.8717 44.1288 44.4771C47.8795 41.0824 49.9867 36.4783 49.9867 31.6775C49.9867 19.4591 32.4867 5.65684 31.6117 5.06855ZM35.5617 41.7916L33.3367 37.7414C34.582 37.1787 35.6297 36.3135 36.3626 35.2426C37.0956 34.1716 37.4848 32.9372 37.4867 31.6775H42.4867C42.4843 33.7791 41.8351 35.8386 40.6119 37.6251C39.3888 39.4115 37.64 40.8543 35.5617 41.7916Z'
							fill='white'
						/>
					</svg>
					<div className={styles.conditionText}>
						<p>Change of Rain</p>
						<p>{airConditions[1]}%</p>
					</div>
				</motion.div>
				<motion.div
					ref={infoFourRef}
					variants={moveToRight}
					initial='hidden'
					transition={{ duration: 1, delay: 0.85 }}
					animate={infoFourView ? 'visible' : 'hidden'}
					className={styles.informationSingle}
				>
					<svg xmlns='http://www.w3.org/2000/svg' width='65' height='60' viewBox='0 0 65 60' fill='none'>
						<path
							d='M32.5 3.125C33.6218 3.125 34.5313 3.96447 34.5313 5V7.5C34.5313 8.53553 33.6218 9.375 32.5 9.375C31.3782 9.375 30.4688 8.53553 30.4688 7.5V5C30.4688 3.96447 31.3782 3.125 32.5 3.125Z'
							fill='white'
						/>
						<path
							d='M32.5 15.625C23.8993 15.625 16.9271 22.0609 16.9271 30C16.9271 37.9391 23.8993 44.375 32.5 44.375C41.1007 44.375 48.0729 37.9391 48.0729 30C48.0729 22.0609 41.1007 15.625 32.5 15.625Z'
							fill='white'
						/>
						<path
							d='M14.7856 10.9966C13.9923 10.2643 12.7062 10.2643 11.9129 10.9966C11.1197 11.7288 11.1197 12.916 11.9129 13.6482L13.828 15.416C14.6213 16.1482 15.9074 16.1482 16.7006 15.416C17.4939 14.6837 17.4939 13.4966 16.7006 12.7643L14.7856 10.9966Z'
							fill='white'
						/>
						<path
							d='M61.6146 30C61.6146 31.0355 60.7052 31.875 59.5834 31.875H56.875C55.7532 31.875 54.8438 31.0355 54.8438 30C54.8438 28.9645 55.7532 28.125 56.875 28.125H59.5834C60.7052 28.125 61.6146 28.9645 61.6146 30Z'
							fill='white'
						/>
						<path
							d='M53.0871 13.6482C53.8803 12.916 53.8803 11.7288 53.0871 10.9965C52.2938 10.2643 51.0077 10.2643 50.2145 10.9965L48.2994 12.7643C47.5061 13.4965 47.5061 14.6837 48.2994 15.416C49.0926 16.1482 50.3787 16.1482 51.172 15.416L53.0871 13.6482Z'
							fill='white'
						/>
						<path
							d='M32.5 50.625C33.6218 50.625 34.5313 51.4645 34.5313 52.5V55C34.5313 56.0355 33.6218 56.875 32.5 56.875C31.3782 56.875 30.4688 56.0355 30.4688 55V52.5C30.4688 51.4645 31.3782 50.625 32.5 50.625Z'
							fill='white'
						/>
						<path
							d='M51.1722 44.5841C50.3789 43.8518 49.0928 43.8518 48.2996 44.5841C47.5063 45.3163 47.5063 46.5035 48.2996 47.2357L50.2146 49.0035C51.0079 49.7357 52.294 49.7357 53.0873 49.0035C53.8805 48.2712 53.8805 47.0841 53.0873 46.3518L51.1722 44.5841Z'
							fill='white'
						/>
						<path
							d='M10.1563 30C10.1563 31.0355 9.24685 31.875 8.12502 31.875H5.41669C4.29486 31.875 3.38544 31.0355 3.38544 30C3.38544 28.9645 4.29486 28.125 5.41669 28.125H8.12502C9.24685 28.125 10.1563 28.9645 10.1563 30Z'
							fill='white'
						/>
						<path
							d='M16.7005 47.2357C17.4937 46.5035 17.4937 45.3163 16.7005 44.584C15.9072 43.8518 14.6211 43.8518 13.8278 44.584L11.9128 46.3518C11.1195 47.084 11.1195 48.2712 11.9128 49.0035C12.706 49.7357 13.9921 49.7357 14.7854 49.0035L16.7005 47.2357Z'
							fill='white'
						/>
					</svg>
					<div className={styles.conditionText}>
						<p>UV Index</p>
						<p>{airConditions[3]}</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default AirConditions
