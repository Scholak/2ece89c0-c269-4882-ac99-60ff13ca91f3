import { Activities, Menu, Info, AirConditions, WeeklyForecast, HourlyForecast } from './components'

const App = () => {
  return (
		<main>
			<Info />
			<HourlyForecast />
			<Menu />
			<Activities />
			<AirConditions />
			<WeeklyForecast />
		</main>
	)
}

export default App