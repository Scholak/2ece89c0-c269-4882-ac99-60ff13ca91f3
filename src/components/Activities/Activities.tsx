import styles from './Activities.module.scss'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

const Activities = () => {
  return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'>
					<path
						d='M7.99263 5.09181C5.62503 5.09181 3.60797 6.86211 3.60797 9.16128C3.60797 10.7474 4.35068 12.0827 5.33501 13.1889C6.31595 14.2912 7.58153 15.2165 8.72565 15.991L10.6997 17.3272C10.9159 17.4735 11.1994 17.4735 11.4156 17.3272L13.3896 15.991C14.5337 15.2165 15.7993 14.2912 16.7802 13.1889C17.7646 12.0827 18.5073 10.7474 18.5073 9.16128C18.5073 6.86211 16.4902 5.09181 14.1226 5.09181C12.9022 5.09181 11.8283 5.66406 11.0576 6.40451C10.287 5.66406 9.21307 5.09181 7.99263 5.09181Z'
						fill='white'
					/>
				</svg>
				<p>Activities in your area</p>
			</div>
			<div className={styles.activityImages}>
				<div className={styles.imageWrapper}>
					<img src={img1} alt='activity image' />
				</div>
				<div className={styles.imageWrapper}>
					<img src={img2} alt='activity image' />
				</div>
				<div className={styles.imageWrapper}>
					<img src={img3} alt='activity image' />
				</div>
				<div className={styles.imageWrapper}>
					<img src={img4} alt='activity image' />
				</div>
			</div>
		</div>
	)
}

export default Activities