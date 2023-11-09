import styles from './Info.module.scss'
import locationIcon from '../../assets/locationIcon.png'
import thunderIcon from '../../assets/thunderIcon.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Info = () => {
  const { city, type, degree } = useSelector((state: RootState) => state.weather)

  return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.location}>
					<img src={locationIcon} alt='location icon' />
					<p>{city}</p>
				</div>
				<p className={styles.type}>{type}</p>
				<p className={styles.degree}>{degree} °C</p>
			</div>
			<img src={thunderIcon} alt='thunder icon' />
			<p className={styles.date}>Sunday | 12 Dec 2023</p>
		</div>
	)
}

export default Info