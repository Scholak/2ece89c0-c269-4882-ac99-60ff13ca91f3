import { Activities, Menu, Info, AirConditions, WeeklyForecast, HourlyForecast } from './components'

const App = () => {
  return (
		<main>
			<Menu />
			<Info />
			<Activities />
			<HourlyForecast />
			<WeeklyForecast />
			<AirConditions />
		</main>
	)
}

export default App