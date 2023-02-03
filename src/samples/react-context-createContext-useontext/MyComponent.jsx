import React, { useContext } from 'react'
import { Context } from './context'

const MyComponent = () => {
	const value = useContext(Context)
	return <h1>{value}</h1>
}

export default MyComponent
