import styles from './HourlyForecast.module.scss'
import logo from '../../assets/logoLong.png'
import { Label, LabelList, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

// const data = [
// 	{
// 		name: 'Page A',
// 		uv: 4000,
// 		pv: 2400,
// 		amt: 2400,
// 	},
// 	{
// 		name: 'Page B',
// 		uv: 3000,
// 		pv: 1398,
// 		amt: 2210,
// 	},
// 	{
// 		name: 'Page C',
// 		uv: 2000,
// 		pv: 9800,
// 		amt: 2290,
// 	},
// 	{
// 		name: 'Page D',
// 		uv: 2780,
// 		pv: 3908,
// 		amt: 2000,
// 	},
// 	{
// 		name: 'Page E',
// 		uv: 1890,
// 		pv: 4800,
// 		amt: 2181,
// 	},
// 	{
// 		name: 'Page F',
// 		uv: 2390,
// 		pv: 3800,
// 		amt: 2500,
// 	},
// 	{
// 		name: 'Page G',
// 		uv: 3490,
// 		pv: 4300,
// 		amt: 2100,
// 	},
// ]

const HourlyForecast = () => {
  const { forecast } = useSelector((state: RootState) => state.weather)
  const data = [
		{
			pv: 100,
			degree: `${forecast['08:00']}°`,
			Svg: (
				<svg xmlns='http://www.w3.org/2000/svg' width='18' height='17' viewBox='0 0 18 17' fill='none'>
					<g clip-path='url(#clip0_8_435)'>
						<path
							d='M4.1904 10.0237C4.04072 10.0764 3.89885 10.1456 3.76697 10.2292C3.17992 9.98631 2.63005 9.62496 2.1535 9.14513C0.218366 7.21653 0.218366 4.08131 2.1535 2.15271C2.35146 1.95491 2.55933 1.77688 2.78204 1.61864C3.15323 1.35654 3.73723 1.79666 3.69764 2.20711C3.56401 3.62141 4.03913 5.09012 5.12795 6.1731C5.54352 6.59022 6.0151 6.9172 6.51872 7.15432C5.19643 7.37273 4.18794 8.52137 4.18794 9.90555C4.18794 9.94512 4.18877 9.98451 4.1904 10.0237Z'
							fill='white'
						/>
						<path
							d='M8.04549 3.953L8.41275 5.17064C8.37653 5.19971 8.34085 5.22942 8.30572 5.25977L7.23538 4.53348L5.99667 5.37401L6.42528 3.953L5.23367 3.05209L6.73613 3.01029L7.23538 1.61714L7.73463 3.01029L9.2371 3.05209L8.04549 3.953Z'
							fill='white'
						/>
						<path
							d='M12.2804 3.12639L13.0528 2.54591L12.0826 2.52269L11.7576 1.61714L11.4326 2.52269L10.4624 2.54591L11.2348 3.12639L10.9569 4.04588L11.7576 3.50255L12.5583 4.04588L12.2804 3.12639Z'
							fill='white'
						/>
						<path
							d='M5.58226 14.7857H14.6453C16.1854 14.7857 17.434 13.5371 17.434 11.997C17.434 10.689 16.5335 9.59139 15.3186 9.29021C15.3344 9.14892 15.3425 9.00531 15.3425 8.85981C15.3425 6.74214 13.6258 5.02544 11.5081 5.02544C9.75166 5.02544 8.27105 6.20644 7.81705 7.81769C7.76958 7.81529 7.7218 7.81407 7.67373 7.81407C6.13361 7.81407 4.8851 9.06258 4.8851 10.6027C4.8851 10.6423 4.88592 10.6817 4.88756 10.7208C4.07395 11.0073 3.49078 11.7826 3.49078 12.6942C3.49078 13.8493 4.42717 14.7857 5.58226 14.7857Z'
							fill='white'
						/>
					</g>
					<defs>
						<clipPath id='clip0_8_435'>
							<rect width='16.7318' height='16.7318' fill='white' transform='translate(0.702148 0.145325)' />
						</clipPath>
					</defs>
				</svg>
			),
			wind: '11.7km/h',
			hour: '08:00',
		},
		{
			pv: 85,
			degree: `${forecast['12:00']}°`,
			Svg: (
				<svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' fill='none'>
					<path
						d='M12.3745 2.85136L10.6107 4.20385L11.2451 6.33716L9.4116 5.0753L7.57807 6.33716L8.21249 4.20385L6.44868 2.85136L8.67261 2.78862L9.4116 0.697144L10.1506 2.78862L12.3745 2.85136ZM14.8146 7.66873L13.6712 8.54018L14.0826 9.92055L12.8974 9.10488L11.7122 9.92055L12.1235 8.54018L10.9802 7.66873L12.4164 7.63387L12.8974 6.27441L13.3784 7.63387L14.8146 7.66873ZM13.2251 11.1197C13.8037 11.0639 14.4242 11.8865 14.0547 12.4094C13.8316 12.7231 13.5946 13.0159 13.3017 13.2948C10.5759 16.0346 6.16284 16.0346 3.44392 13.2948C0.718033 10.5759 0.718033 6.1559 3.44392 3.43698C3.72279 3.15811 4.01559 2.90714 4.32931 2.68405C4.85218 2.31455 5.67483 2.93502 5.61906 3.51366C5.43083 5.50754 6.1001 7.5781 7.63385 9.10488C9.16062 10.6386 11.2242 11.3079 13.2251 11.1197Z'
						fill='white'
					/>
				</svg>
			),
			wind: '11.7km/h',
			hour: '12:00',
		},
		{
			pv: 60,
			degree: `${forecast['15:00']}°`,
			Svg: (
				<svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' fill='none'>
					<g clip-path='url(#clip0_8_403)'>
						<path
							d='M3.06482 8.68956C3.1967 8.60598 3.33858 8.53674 3.48825 8.48405C3.48662 8.44487 3.48579 8.40548 3.48579 8.3659C3.48579 6.98172 4.49428 5.83309 5.81657 5.61468C5.31295 5.37756 4.84137 5.05058 4.42581 4.63346C3.33699 3.55048 2.86186 2.08177 2.99549 0.667465C3.03509 0.257019 2.45108 -0.183098 2.07989 0.0789941C1.85718 0.237238 1.64932 0.415263 1.45135 0.613068C-0.483783 2.54167 -0.483783 5.67688 1.45135 7.60548C1.9279 8.08531 2.47777 8.44667 3.06482 8.68956Z'
							fill='white'
						/>
						<path
							d='M7.7106 3.631L7.34334 2.41335L8.53495 1.51245L7.03249 1.47065L6.53323 0.077494L6.03398 1.47065L4.53152 1.51245L5.72313 2.41335L5.29452 3.83437L6.53323 2.99383L7.60357 3.72012C7.6387 3.68978 7.67438 3.66007 7.7106 3.631Z'
							fill='white'
						/>
						<path
							d='M12.3507 1.00627L11.5782 1.58675L11.8561 2.50623L11.0554 1.9629L10.2547 2.50623L10.5326 1.58675L9.76021 1.00627L10.7305 0.983049L11.0554 0.0774977L11.3804 0.983049L12.3507 1.00627Z'
							fill='white'
						/>
						<path
							d='M13.9432 13.246H11.8579L12.457 12.1976C12.7226 11.7328 12.387 11.1545 11.8517 11.1545H11.1545V8.3659C11.1545 7.65099 10.2068 7.3993 9.85208 8.02002L6.86579 13.246H4.88011C3.72502 13.246 2.78863 12.3096 2.78863 11.1545C2.78863 10.243 3.3718 9.46762 4.18541 9.1812C4.18378 9.14203 4.18295 9.10264 4.18295 9.06306C4.18295 7.52294 5.43147 6.27443 6.97159 6.27443C7.01965 6.27443 7.06743 6.27564 7.1149 6.27805C7.5689 4.6668 9.04951 3.48579 10.806 3.48579C12.9236 3.48579 14.6403 5.2025 14.6403 7.32017C14.6403 7.46567 14.6322 7.60928 14.6164 7.75057C15.8313 8.05175 16.7318 9.1494 16.7318 10.4574C16.7318 11.9975 15.4833 13.246 13.9432 13.246Z'
							fill='white'
						/>
						<path d='M7.66875 13.246H9.06306V16.7318L11.8517 11.8517H10.4574V8.3659L7.66875 13.246Z' fill='white' />
					</g>
					<defs>
						<clipPath id='clip0_8_403'>
							<rect width='16.7318' height='16.7318' fill='white' />
						</clipPath>
					</defs>
				</svg>
			),
			wind: '11.7km/h',
			hour: '15:00',
		},
		{
			pv: 70,
			degree: `${forecast['18:00']}°`,
			Svg: (
				<svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' fill='none'>
					<g clip-path='url(#clip0_8_403)'>
						<path
							d='M3.06482 8.68956C3.1967 8.60598 3.33858 8.53674 3.48825 8.48405C3.48662 8.44487 3.48579 8.40548 3.48579 8.3659C3.48579 6.98172 4.49428 5.83309 5.81657 5.61468C5.31295 5.37756 4.84137 5.05058 4.42581 4.63346C3.33699 3.55048 2.86186 2.08177 2.99549 0.667465C3.03509 0.257019 2.45108 -0.183098 2.07989 0.0789941C1.85718 0.237238 1.64932 0.415263 1.45135 0.613068C-0.483783 2.54167 -0.483783 5.67688 1.45135 7.60548C1.9279 8.08531 2.47777 8.44667 3.06482 8.68956Z'
							fill='white'
						/>
						<path
							d='M7.7106 3.631L7.34334 2.41335L8.53495 1.51245L7.03249 1.47065L6.53323 0.077494L6.03398 1.47065L4.53152 1.51245L5.72313 2.41335L5.29452 3.83437L6.53323 2.99383L7.60357 3.72012C7.6387 3.68978 7.67438 3.66007 7.7106 3.631Z'
							fill='white'
						/>
						<path
							d='M12.3507 1.00627L11.5782 1.58675L11.8561 2.50623L11.0554 1.9629L10.2547 2.50623L10.5326 1.58675L9.76021 1.00627L10.7305 0.983049L11.0554 0.0774977L11.3804 0.983049L12.3507 1.00627Z'
							fill='white'
						/>
						<path
							d='M13.9432 13.246H11.8579L12.457 12.1976C12.7226 11.7328 12.387 11.1545 11.8517 11.1545H11.1545V8.3659C11.1545 7.65099 10.2068 7.3993 9.85208 8.02002L6.86579 13.246H4.88011C3.72502 13.246 2.78863 12.3096 2.78863 11.1545C2.78863 10.243 3.3718 9.46762 4.18541 9.1812C4.18378 9.14203 4.18295 9.10264 4.18295 9.06306C4.18295 7.52294 5.43147 6.27443 6.97159 6.27443C7.01965 6.27443 7.06743 6.27564 7.1149 6.27805C7.5689 4.6668 9.04951 3.48579 10.806 3.48579C12.9236 3.48579 14.6403 5.2025 14.6403 7.32017C14.6403 7.46567 14.6322 7.60928 14.6164 7.75057C15.8313 8.05175 16.7318 9.1494 16.7318 10.4574C16.7318 11.9975 15.4833 13.246 13.9432 13.246Z'
							fill='white'
						/>
						<path d='M7.66875 13.246H9.06306V16.7318L11.8517 11.8517H10.4574V8.3659L7.66875 13.246Z' fill='white' />
					</g>
					<defs>
						<clipPath id='clip0_8_403'>
							<rect width='16.7318' height='16.7318' fill='white' />
						</clipPath>
					</defs>
				</svg>
			),
			wind: '11.7km/h',
			hour: '18:00',
		},
		{
			pv: 60,
			degree: `${forecast['21:00']}°`,
			Svg: (
				<svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' fill='none'>
					<g clip-path='url(#clip0_8_403)'>
						<path
							d='M3.06482 8.68956C3.1967 8.60598 3.33858 8.53674 3.48825 8.48405C3.48662 8.44487 3.48579 8.40548 3.48579 8.3659C3.48579 6.98172 4.49428 5.83309 5.81657 5.61468C5.31295 5.37756 4.84137 5.05058 4.42581 4.63346C3.33699 3.55048 2.86186 2.08177 2.99549 0.667465C3.03509 0.257019 2.45108 -0.183098 2.07989 0.0789941C1.85718 0.237238 1.64932 0.415263 1.45135 0.613068C-0.483783 2.54167 -0.483783 5.67688 1.45135 7.60548C1.9279 8.08531 2.47777 8.44667 3.06482 8.68956Z'
							fill='white'
						/>
						<path
							d='M7.7106 3.631L7.34334 2.41335L8.53495 1.51245L7.03249 1.47065L6.53323 0.077494L6.03398 1.47065L4.53152 1.51245L5.72313 2.41335L5.29452 3.83437L6.53323 2.99383L7.60357 3.72012C7.6387 3.68978 7.67438 3.66007 7.7106 3.631Z'
							fill='white'
						/>
						<path
							d='M12.3507 1.00627L11.5782 1.58675L11.8561 2.50623L11.0554 1.9629L10.2547 2.50623L10.5326 1.58675L9.76021 1.00627L10.7305 0.983049L11.0554 0.0774977L11.3804 0.983049L12.3507 1.00627Z'
							fill='white'
						/>
						<path
							d='M13.9432 13.246H11.8579L12.457 12.1976C12.7226 11.7328 12.387 11.1545 11.8517 11.1545H11.1545V8.3659C11.1545 7.65099 10.2068 7.3993 9.85208 8.02002L6.86579 13.246H4.88011C3.72502 13.246 2.78863 12.3096 2.78863 11.1545C2.78863 10.243 3.3718 9.46762 4.18541 9.1812C4.18378 9.14203 4.18295 9.10264 4.18295 9.06306C4.18295 7.52294 5.43147 6.27443 6.97159 6.27443C7.01965 6.27443 7.06743 6.27564 7.1149 6.27805C7.5689 4.6668 9.04951 3.48579 10.806 3.48579C12.9236 3.48579 14.6403 5.2025 14.6403 7.32017C14.6403 7.46567 14.6322 7.60928 14.6164 7.75057C15.8313 8.05175 16.7318 9.1494 16.7318 10.4574C16.7318 11.9975 15.4833 13.246 13.9432 13.246Z'
							fill='white'
						/>
						<path d='M7.66875 13.246H9.06306V16.7318L11.8517 11.8517H10.4574V8.3659L7.66875 13.246Z' fill='white' />
					</g>
					<defs>
						<clipPath id='clip0_8_403'>
							<rect width='16.7318' height='16.7318' fill='white' />
						</clipPath>
					</defs>
				</svg>
			),
			wind: '11.7km/h',
			hour: '21:00',
		},
		{
			pv: 68,
			degree: `${forecast['21:00']}°`,
			Svg: (
				<svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' fill='none'>
					<g clip-path='url(#clip0_8_403)'>
						<path
							d='M3.06482 8.68956C3.1967 8.60598 3.33858 8.53674 3.48825 8.48405C3.48662 8.44487 3.48579 8.40548 3.48579 8.3659C3.48579 6.98172 4.49428 5.83309 5.81657 5.61468C5.31295 5.37756 4.84137 5.05058 4.42581 4.63346C3.33699 3.55048 2.86186 2.08177 2.99549 0.667465C3.03509 0.257019 2.45108 -0.183098 2.07989 0.0789941C1.85718 0.237238 1.64932 0.415263 1.45135 0.613068C-0.483783 2.54167 -0.483783 5.67688 1.45135 7.60548C1.9279 8.08531 2.47777 8.44667 3.06482 8.68956Z'
							fill='white'
						/>
						<path
							d='M7.7106 3.631L7.34334 2.41335L8.53495 1.51245L7.03249 1.47065L6.53323 0.077494L6.03398 1.47065L4.53152 1.51245L5.72313 2.41335L5.29452 3.83437L6.53323 2.99383L7.60357 3.72012C7.6387 3.68978 7.67438 3.66007 7.7106 3.631Z'
							fill='white'
						/>
						<path
							d='M12.3507 1.00627L11.5782 1.58675L11.8561 2.50623L11.0554 1.9629L10.2547 2.50623L10.5326 1.58675L9.76021 1.00627L10.7305 0.983049L11.0554 0.0774977L11.3804 0.983049L12.3507 1.00627Z'
							fill='white'
						/>
						<path
							d='M13.9432 13.246H11.8579L12.457 12.1976C12.7226 11.7328 12.387 11.1545 11.8517 11.1545H11.1545V8.3659C11.1545 7.65099 10.2068 7.3993 9.85208 8.02002L6.86579 13.246H4.88011C3.72502 13.246 2.78863 12.3096 2.78863 11.1545C2.78863 10.243 3.3718 9.46762 4.18541 9.1812C4.18378 9.14203 4.18295 9.10264 4.18295 9.06306C4.18295 7.52294 5.43147 6.27443 6.97159 6.27443C7.01965 6.27443 7.06743 6.27564 7.1149 6.27805C7.5689 4.6668 9.04951 3.48579 10.806 3.48579C12.9236 3.48579 14.6403 5.2025 14.6403 7.32017C14.6403 7.46567 14.6322 7.60928 14.6164 7.75057C15.8313 8.05175 16.7318 9.1494 16.7318 10.4574C16.7318 11.9975 15.4833 13.246 13.9432 13.246Z'
							fill='white'
						/>
						<path d='M7.66875 13.246H9.06306V16.7318L11.8517 11.8517H10.4574V8.3659L7.66875 13.246Z' fill='white' />
					</g>
					<defs>
						<clipPath id='clip0_8_403'>
							<rect width='16.7318' height='16.7318' fill='white' />
						</clipPath>
					</defs>
				</svg>
			),
			wind: '11.7km/h',
			hour: '21:00',
		},
		{
			pv: 80,
			degree: `${forecast['00:00']}°`,
			Svg: (
				<svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' fill='none'>
					<g clip-path='url(#clip0_8_403)'>
						<path
							d='M3.06482 8.68956C3.1967 8.60598 3.33858 8.53674 3.48825 8.48405C3.48662 8.44487 3.48579 8.40548 3.48579 8.3659C3.48579 6.98172 4.49428 5.83309 5.81657 5.61468C5.31295 5.37756 4.84137 5.05058 4.42581 4.63346C3.33699 3.55048 2.86186 2.08177 2.99549 0.667465C3.03509 0.257019 2.45108 -0.183098 2.07989 0.0789941C1.85718 0.237238 1.64932 0.415263 1.45135 0.613068C-0.483783 2.54167 -0.483783 5.67688 1.45135 7.60548C1.9279 8.08531 2.47777 8.44667 3.06482 8.68956Z'
							fill='white'
						/>
						<path
							d='M7.7106 3.631L7.34334 2.41335L8.53495 1.51245L7.03249 1.47065L6.53323 0.077494L6.03398 1.47065L4.53152 1.51245L5.72313 2.41335L5.29452 3.83437L6.53323 2.99383L7.60357 3.72012C7.6387 3.68978 7.67438 3.66007 7.7106 3.631Z'
							fill='white'
						/>
						<path
							d='M12.3507 1.00627L11.5782 1.58675L11.8561 2.50623L11.0554 1.9629L10.2547 2.50623L10.5326 1.58675L9.76021 1.00627L10.7305 0.983049L11.0554 0.0774977L11.3804 0.983049L12.3507 1.00627Z'
							fill='white'
						/>
						<path
							d='M13.9432 13.246H11.8579L12.457 12.1976C12.7226 11.7328 12.387 11.1545 11.8517 11.1545H11.1545V8.3659C11.1545 7.65099 10.2068 7.3993 9.85208 8.02002L6.86579 13.246H4.88011C3.72502 13.246 2.78863 12.3096 2.78863 11.1545C2.78863 10.243 3.3718 9.46762 4.18541 9.1812C4.18378 9.14203 4.18295 9.10264 4.18295 9.06306C4.18295 7.52294 5.43147 6.27443 6.97159 6.27443C7.01965 6.27443 7.06743 6.27564 7.1149 6.27805C7.5689 4.6668 9.04951 3.48579 10.806 3.48579C12.9236 3.48579 14.6403 5.2025 14.6403 7.32017C14.6403 7.46567 14.6322 7.60928 14.6164 7.75057C15.8313 8.05175 16.7318 9.1494 16.7318 10.4574C16.7318 11.9975 15.4833 13.246 13.9432 13.246Z'
							fill='white'
						/>
						<path d='M7.66875 13.246H9.06306V16.7318L11.8517 11.8517H10.4574V8.3659L7.66875 13.246Z' fill='white' />
					</g>
					<defs>
						<clipPath id='clip0_8_403'>
							<rect width='16.7318' height='16.7318' fill='white' />
						</clipPath>
					</defs>
				</svg>
			),
			wind: '11.7km/h',
			hour: '00:00',
		},
	]

  return (
		<div className={styles.container}>
			<img src={logo} alt='logo' className={styles.logo} />
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
						<LineChart width={300} height={100} data={data}>
							<Line type='monotone' dataKey='pv' stroke='#ffffff' strokeWidth={2} dot={false} />
							<LabelList dataKey='pv' position='insideTop' />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	)
}

export default HourlyForecast