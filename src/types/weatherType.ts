export interface IWeatherType {
	date: string
	city: string
	type: string
	degree: number
	airConditions: string
	forecast: {
		'08:00': string
		'12:00': string
		'15:00': string
		'18:00': string
		'21:00': string
		'00:00': string
	}
	weeklyWeather: {
		previous: {
			sunday: {
				type: string
				degree: string
			}
			monday: {
				type: string
				degree: string
			}
			tuesday: {
				type: string
				degree: string
			}
			wednesday: {
				type: string
				degree: string
			}
			thursday: {
				type: string
				degree: string
			}
			friday: {
				type: string
				degree: string
			}
			saturday: {
				type: string
				degree: string
			}
		}
		current: {
			sunday: {
				type: string
				degree: string
			}
			monday: {
				type: string
				degree: string
			}
			tuesday: {
				type: string
				degree: string
			}
			wednesday: {
				type: string
				degree: string
			}
			thursday: {
				type: string
				degree: string
			}
			friday: {
				type: string
				degree: string
			}
			saturday: {
				type: string
				degree: string
			}
		}
		next: {
			sunday: {
				type: string
				degree: string
			}
			monday: {
				type: string
				degree: string
			}
			tuesday: {
				type: string
				degree: string
			}
			wednesday: {
				type: string
				degree: string
			}
			thursday: {
				type: string
				degree: string
			}
			friday: {
				type: string
				degree: string
			}
			saturday: {
				type: string
				degree: string
			}
		}
	}
}
