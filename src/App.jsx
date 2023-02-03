import React from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

const App = () => {
	const [theme, colorMode] = useMode()
	return (
		<ColorModeContext.Provider value={colorMode}>
			<div className='app'></div>
		</ColorModeContext.Provider>
	)
}

export default App
