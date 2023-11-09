import { Activities, Menu, Info, AirConditions, WeeklyForecast } from './components'

const App = () => {
  return (
		<main>
			<Menu />
			<Info />
			<Activities />
			<WeeklyForecast />
			<AirConditions />
		</main>
	)
}

export default App