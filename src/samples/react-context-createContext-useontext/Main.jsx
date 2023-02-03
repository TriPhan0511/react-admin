import React from 'react'
import { Context } from './context'
import MyComponent from './MyComponent'

const Main = () => {
	const value = 'My Context Value'
	return (
		<>
			<Context.Provider value={value}>
				<MyComponent />
			</Context.Provider>
		</>
	)
}

export default Main
