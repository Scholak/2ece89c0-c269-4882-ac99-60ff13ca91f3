export const DegreeLabel = (props: any) => {
	const { x, y, value } = props

	return (
		<text x={x} y={y} dy={-10} fill='#ffffff' fontSize={14} fontWeight='bold' textAnchor='middle'>
			{value}
		</text>
	)
}

export const WeatherLabel = (props: any) => {
	const { x, y, value } = props

	return (
		<foreignObject width={50} height={50} x={x - 8} y={y + 10}>
			{value}
		</foreignObject>
	)
}

export const WindLabel = (props: any) => {
	const { x, y, value } = props

	return (
		<text x={x} y={y} dy={44} fill='#ffffff' fontSize={10} textAnchor='middle'>
			{value}
		</text>
	)
}

export const HourLabel = (props: any) => {
	const { x, y, value } = props

	return (
		<text x={x} y={y} dy={58} fill='#ffffff' fontSize={10} textAnchor='middle'>
			{value}
		</text>
	)
}
