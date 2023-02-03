import React from 'react'
import Dashboard from './scenes/dashboard'
import Sidebar from './scenes/global/Sidebar'
import Topbar from './scenes/global/Topbar'

const App = () => {
	return (
		<div className='app'>
			<Sidebar />
			<Topbar />
			<Dashboard />
		</div>
	)
}

export default App
