import { createSlice } from '@reduxjs/toolkit'
import weatherData from '../../data.json'
import { IWeatherType } from '../../types/weatherType'

const initialState: IWeatherType = weatherData

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
    // ...
	},
})

export default weatherSlice.reducer
