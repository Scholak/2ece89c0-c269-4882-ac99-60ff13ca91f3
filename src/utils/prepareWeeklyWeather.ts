import { IPreparedWeeklyWeatherType, IWeeklyWeatherType } from "../types/weatherType"

export const prepareWeeklyWeather = (weather: IWeeklyWeatherType, day: string): IPreparedWeeklyWeatherType => {
	return { ...weather, day }
}