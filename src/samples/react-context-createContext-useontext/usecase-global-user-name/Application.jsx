import React, { createContext, useEffect, useState } from 'react'
import { UserContext } from './context'
import Layout from './Layout'

const Application = () => {
	const [userName, setUserName] = useState('John Smith')

	useEffect(() => {
		setTimeout(() => {
			setUserName('Smith, John Smith')
		}, [2000])
	}, [])

	return (
		<UserContext.Provider value={userName}>
			<Layout>Main Content</Layout>
		</UserContext.Provider>
	)
}

export default Application
