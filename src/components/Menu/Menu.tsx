import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { moveToRight } from '../../animations/moveToRight'
import { moveToLeft } from '../../animations/moveToLeft'
import { moveToTop } from '../../animations/moveToTop'
import styles from './Menu.module.scss'
import logo from '../../assets/logo.png'

const Menu = () => {
	const logoRef = useRef<HTMLImageElement>(null)
	const itemOneRef = useRef<HTMLDivElement>(null)
	const itemTwoRef = useRef<HTMLDivElement>(null)
	const itemThreeRef = useRef<HTMLDivElement>(null)
	const itemFourRef = useRef<HTMLDivElement>(null)

	const logoView = useInView(logoRef)
	const itemOneView = useInView(itemOneRef)
	const itemTwoView = useInView(itemTwoRef)
	const itemThreeView = useInView(itemThreeRef)
	const itemFourView = useInView(itemFourRef)

  return (
		<nav className={styles.menu}>
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
			<div>
				<div className={styles.links}>
					<motion.div
						ref={itemOneRef}
						variants={moveToRight}
						initial='hidden'
						transition={{ duration: 1, delay: 0.6 }}
						animate={itemOneView ? 'visible' : 'hidden'}
						className={styles.link}
					>
						<svg xmlns='http://www.w3.org/2000/svg' width='95' height='86' viewBox='0 0 95 86' fill='none'>
							<g clipPath='url(#clip0_2_180)'>
								<path
									d='M12.2972 7.64445L13.3264 8.57611C14.3556 9.48389 14.3556 11.0128 13.3264 11.9206L13.3 11.9444C12.2708 12.8761 10.6347 12.8761 9.60556 11.9444L8.57639 11.0128C7.54722 10.105 7.54722 8.6 8.57639 7.66833L8.60278 7.64445C9.60556 6.73667 11.2681 6.71278 12.2972 7.64445Z'
									fill='white'
								/>
								<path
									d='M2.6125 23.7694H5.30417C6.75556 23.7694 7.91667 24.8206 7.91667 26.1583V26.1822C7.91667 27.4961 6.75556 28.5472 5.27778 28.5233H2.6125C1.16111 28.5233 0 27.4722 0 26.1583V26.1344C0 24.8206 1.16111 23.7694 2.6125 23.7694Z'
									fill='white'
								/>
								<path
									d='M29.0278 0H29.0542C30.5056 0 31.6667 1.05111 31.6667 2.365V4.68222C31.6667 5.99611 30.5056 7.04722 29.0278 7.02333H29.0014C27.55 7.02333 26.3889 5.97222 26.3889 4.65833V2.365C26.3889 1.05111 27.55 0 29.0278 0Z'
									fill='white'
								/>
								<path
									d='M45.7583 7.64445C46.7875 6.73667 48.45 6.73667 49.4792 7.66833C50.5083 8.6 50.5083 10.0811 49.4792 11.0128L48.45 11.9444C47.4472 12.8761 45.7847 12.8761 44.7556 11.9444L44.7292 11.9206C43.7 11.0128 43.7 9.50778 44.7292 8.57611L45.7583 7.64445Z'
									fill='white'
								/>
								<path
									d='M13.1944 26.1583C13.1944 18.2511 20.2931 11.825 29.0278 11.825C35.0233 11.825 40.2479 14.8526 42.9352 19.3087C39.8713 21.775 37.5818 25.0127 36.4387 28.6853C36.1692 28.6729 35.8979 28.6667 35.625 28.6667C28.6903 28.6667 22.7969 32.7025 20.6545 38.321C16.177 35.787 13.1944 31.2838 13.1944 26.1583Z'
									fill='white'
								/>
								<path
									d='M12.2972 44.6483C11.2681 45.58 9.60556 45.58 8.57639 44.6483C7.54722 43.7167 7.54722 42.2356 8.55 41.28L9.57917 40.3483C10.6083 39.4167 12.2708 39.4167 13.3 40.3483L13.3264 40.3722C14.3292 41.28 14.3556 42.785 13.3264 43.7167L12.2972 44.6483Z'
									fill='white'
								/>
								<path
									d='M79.1667 68.0833H27.7083C21.15 68.0833 15.8333 63.2704 15.8333 57.3333C15.8333 52.648 19.1444 48.6628 23.764 47.1906C23.7547 46.9892 23.75 46.7868 23.75 46.5833C23.75 38.6673 30.8388 32.25 39.5833 32.25C39.8562 32.25 40.1275 32.2563 40.397 32.2686C42.9748 23.9869 51.3814 17.9167 61.3542 17.9167C73.3779 17.9167 83.125 26.7404 83.125 37.625C83.125 38.3729 83.079 39.111 82.9894 39.8372C89.8871 41.3853 95 47.0271 95 53.75C95 61.6661 87.9112 68.0833 79.1667 68.0833Z'
									fill='white'
								/>
								<path
									d='M39.5256 82.5212L44.7869 72.9954C45.2367 72.1811 46.1562 71.6667 47.1619 71.6667C49.1358 71.6667 50.4197 73.5472 49.5369 75.1454L44.2756 84.6712C43.8258 85.4856 42.9063 86 41.9006 86C39.9267 86 38.6428 84.1195 39.5256 82.5212Z'
									fill='white'
								/>
								<path
									d='M51.4006 82.5212L56.6619 72.9954C57.1117 72.1811 58.0312 71.6667 59.0369 71.6667C61.0108 71.6667 62.2947 73.5472 61.4119 75.1454L56.1506 84.6712C55.7008 85.4856 54.7813 86 53.7756 86C51.8017 86 50.5178 84.1195 51.4006 82.5212Z'
									fill='white'
								/>
							</g>
							<defs>
								<clipPath id='clip0_2_180'>
									<rect width='95' height='86' fill='white' />
								</clipPath>
							</defs>
						</svg>
						<p>weather</p>
					</motion.div>
					<motion.div
						ref={itemTwoRef}
						variants={moveToLeft}
						initial='hidden'
						transition={{ duration: 1, delay: 0.65 }}
						animate={itemTwoView ? 'visible' : 'hidden'}
						className={styles.link}
					>
						<svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M4.61169 17.0278C4.61169 10.1706 10.1706 4.61169 17.0278 4.61169C23.885 4.61169 29.4439 10.1706 29.4439 17.0278C29.4439 23.885 23.885 29.4439 17.0278 29.4439C10.1706 29.4439 4.61169 23.885 4.61169 17.0278ZM15.3957 13.209C14.071 14.2988 13.186 15.8317 12.9045 17.5238L11.9726 23.1261C11.7575 24.4195 13.2614 25.2877 14.2739 24.4547L18.6597 20.8466C19.9844 19.7567 20.8694 18.2239 21.1509 16.5317L22.0827 10.9294C22.2979 9.63606 20.794 8.7678 19.7815 9.60079L15.3957 13.209Z'
								fill='#C4C3C1'
							/>
							<path
								d='M14.8993 17.0278C14.8993 15.8523 15.8523 14.8993 17.0278 14.8993C18.2033 14.8993 19.1563 15.8523 19.1563 17.0278C19.1563 18.2033 18.2033 19.1563 17.0278 19.1563C15.8523 19.1563 14.8993 18.2033 14.8993 17.0278Z'
								fill='#C4C3C1'
							/>
						</svg>
						<p>explore</p>
					</motion.div>
					<motion.div
						ref={itemThreeRef}
						variants={moveToRight}
						initial='hidden'
						transition={{ duration: 1, delay: 0.7 }}
						animate={itemThreeView ? 'visible' : 'hidden'}
						className={styles.link}
					>
						<svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'>
							<path
								d='M17.5771 2.69666C11.9361 2.69666 7.36047 7.18075 7.36047 12.709C7.36047 20.2182 17.5771 31.3033 17.5771 31.3033C17.5771 31.3033 27.7938 20.2182 27.7938 12.709C27.7938 7.18075 23.2182 2.69666 17.5771 2.69666ZM17.5771 16.2848C15.563 16.2848 13.9283 14.6829 13.9283 12.709C13.9283 10.7351 15.563 9.13316 17.5771 9.13316C19.5913 9.13316 21.226 10.7351 21.226 12.709C21.226 14.6829 19.5913 16.2848 17.5771 16.2848Z'
								fill='#C4C3C1'
							/>
						</svg>
						<p>cities</p>
					</motion.div>
					<motion.div
						ref={itemFourRef}
						variants={moveToLeft}
						initial='hidden'
						transition={{ duration: 1, delay: 0.75 }}
						animate={itemFourView ? 'visible' : 'hidden'}
						className={styles.link}
					>
						<svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'>
							<path
								d='M12.9932 17.0278C12.9932 14.4808 15.058 12.4161 17.6049 12.4161C20.1519 12.4161 22.2166 14.4808 22.2166 17.0278C22.2166 19.5747 20.1519 21.6395 17.6049 21.6395C15.058 21.6395 12.9932 19.5747 12.9932 17.0278Z'
								fill='#C4C3C1'
							/>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M16.8397 2.60882C17.258 2.17597 17.9518 2.17597 18.3702 2.60882L22.0202 6.38542H27.1831C27.7708 6.38542 28.2473 6.86189 28.2473 7.44965V12.6125L32.0239 16.2625C32.4567 16.6809 32.4567 17.3747 32.0239 17.793L28.2473 21.4431V26.6059C28.2473 27.1937 27.7708 27.6701 27.1831 27.6701H22.0202L18.3702 31.4467C17.9518 31.8796 17.258 31.8796 16.8397 31.4468L13.1896 27.6701H8.0268C7.43904 27.6701 6.96257 27.1937 6.96257 26.6059V21.4431L3.18596 17.793C2.75312 17.3747 2.75312 16.6809 3.18596 16.2625L6.96257 12.6125V7.44965C6.96257 6.86189 7.43904 6.38542 8.0268 6.38542H13.1896L16.8397 2.60882ZM17.6049 10.2876C13.8824 10.2876 10.8648 13.3053 10.8648 17.0278C10.8648 20.7503 13.8824 23.7679 17.6049 23.7679C21.3274 23.7679 24.3451 20.7503 24.3451 17.0278C24.3451 13.3053 21.3274 10.2876 17.6049 10.2876Z'
								fill='#C4C3C1'
							/>
						</svg>
						<p>settings</p>
					</motion.div>
				</div>
			</div>
		</nav>
	)
}

export default Menu